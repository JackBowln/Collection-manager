import { i as arrow, _ as _export_sfc, m as mergeConfig, j as useUI, t as tooltip, k as appConfig, e as __nuxt_component_1$1, d as __nuxt_component_2$1, l as get, g as __nuxt_component_5$2, o as useInjectButtonGroup, p as twMerge, s as select, q as selectMenu, c as useToast, b as useSupabaseUser, h as useRoute } from "../server.mjs";
import { i as i$3, u as u$2, l as l$1, a as i$4, b as i$5, w as w$1, t as t$4, c as c$1, f as f$2, O, n as n$1, d as c$2, e as w$2, S, P, N as N$4, g as t$5, p, h as w$3, j as h$1, E as E$3, T as T$2, s as s$3, _ as __nuxt_component_0, k as usePopper } from "./usePopper-BnxSMfCG.js";
import { defineComponent, computed, ref, inject, watchEffect, nextTick, watch, provide, h, Fragment, toRaw, reactive, cloneVNode, shallowRef, getCurrentInstance, Teleport, normalizeClass, mergeProps, withCtx, createTextVNode, toDisplayString, toRef, useSlots, useSSRContext, unref, createVNode, createBlock, createCommentVNode, openBlock, renderList, resolveComponent, renderSlot, Transition, useId, resolveDynamicComponent, isRef, createSlots } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/vue/index.mjs";
import { defu } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/defu/dist/defu.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { _ as __nuxt_component_9 } from "./Card-Dskk1veu.js";
import { twJoin } from "tailwind-merge";
import { u as useFormGroup, _ as __nuxt_component_3, a as __nuxt_component_4 } from "./Input-D0kU1oTm.js";
import { i as i$2, o as o$1, A as A$3, T as T$1, s as s$2, u as u$3, E as E$2, N as N$3, a as o$2, S as S$1, b as s$4 } from "./keyboard-DfXvXu8t.js";
import { d as d$3, e as e$1, f as f$1, u as u$4, k, _ as __nuxt_component_3$1 } from "./Toggle-DHexaQQc.js";
import { c as __nuxt_component_0$1, _ as __nuxt_component_1$2, d as __nuxt_component_1$3, a as _sfc_main$d, b as _sfc_main$e } from "./FieldDefinition-CrH3ZwrU.js";
import { upperFirst } from "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/scule/dist/index.mjs";
import { useVModel, computedAsync, useDebounceFn } from "@vueuse/core";
import { isEqual } from "ohash/utils";
import { _ as __nuxt_component_7 } from "./Badge-BRw-NuRI.js";
import { useVirtualizer } from "@tanstack/vue-virtual";
import { u as useSupabaseClient } from "./useSupabaseClient-CBvWxwze.js";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/hookable/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/unctx/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/radix3/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/ufo/dist/index.mjs";
import "@supabase/ssr";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/klona/dist/index.mjs";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/Users/viniv/Desktop/dev/collection-manager/node_modules/perfect-debounce/dist/index.mjs";
const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  caption: "sr-only",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    expanded: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  expand: {
    icon: "transform transition-transform duration-200"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    expandButton: {
      icon: "i-heroicons-chevron-down",
      color: "gray",
      variant: "ghost",
      size: "xs",
      class: "-my-1.5 align-middle"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      "xs": "h-0.5",
      "sm": "h-1",
      "md": "h-2",
      "lg": "h-3",
      "xl": "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      "xs": "text-xs",
      "sm": "text-sm",
      "md": "text-sm",
      "lg": "text-sm",
      "xl": "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    "carousel": "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    "swing": "bar-animation-swing",
    "elastic": "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        "xs": "border-t-[2px]",
        "sm": "border-t-[3px]",
        "md": "border-t-[4px]",
        "lg": "border-t-[5px]",
        "xl": "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        "xs": "border-s-[2px]",
        "sm": "border-s-[3px]",
        "md": "border-s-[4px]",
        "lg": "border-s-[5px]",
        "xl": "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs",
    type: "solid"
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const popover = {
  wrapper: "relative",
  container: "z-50 group",
  trigger: "inline-flex w-full",
  width: "",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  base: "overflow-hidden focus:outline-none relative",
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition ease-out duration-200",
    enterFromClass: "opacity-0 translate-y-1",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 translate-y-1"
  },
  overlay: {
    base: "fixed inset-0 transition-opacity z-50",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    transition: {
      enterActiveClass: "ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0"
    }
  },
  popper: {
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow
};
function t$3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a2 = [], s2 = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s2.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$3(() => {
      t2.current && e2[0]();
    }), s2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r of a2.splice(t2, 1)) r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s2;
}
function i$1() {
  let o$12 = o();
  return o$12;
}
function t$2() {
  let e2 = i$1();
  return (o2) => {
    e2.dispose(), e2.nextFrame(o2);
  };
}
var g$1 = ((f2) => (f2[f2.Left = 0] = "Left", f2[f2.Right = 2] = "Right", f2))(g$1 || {});
let t$1 = [];
function De(a2, h2) {
  return a2 === h2;
}
var Ee = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Ee || {}), Ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ve || {}), ke = ((y2) => (y2[y2.Pointer = 0] = "Pointer", y2[y2.Focus = 1] = "Focus", y2[y2.Other = 2] = "Other", y2))(ke || {});
let ne = /* @__PURE__ */ Symbol("ComboboxContext");
function K(a2) {
  let h2 = inject(ne, null);
  if (h2 === null) {
    let r = new Error(`<${a2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, K), r;
  }
  return h2;
}
let ie = /* @__PURE__ */ Symbol("VirtualContext"), Ae$1 = defineComponent({ name: "VirtualProvider", setup(a2, { slots: h$12 }) {
  let r = K("VirtualProvider"), y2 = computed(() => {
    let c2 = o$1(r.optionsRef);
    if (!c2) return { start: 0, end: 0 };
    let f2 = (void 0).getComputedStyle(c2);
    return { start: parseFloat(f2.paddingBlockStart || f2.paddingTop), end: parseFloat(f2.paddingBlockEnd || f2.paddingBottom) };
  }), o2 = useVirtualizer(computed(() => ({ scrollPaddingStart: y2.value.start, scrollPaddingEnd: y2.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o$1(r.optionsRef);
  }, overscan: 12 }))), u2 = computed(() => {
    var c2;
    return (c2 = r.virtual.value) == null ? void 0 : c2.options;
  }), e2 = ref(0);
  return watch([u2], () => {
    e2.value += 1;
  }), provide(ie, r.virtual.value ? o2 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o2.value.getTotalSize()}px` }, ref: (c2) => {
    if (c2) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r.activationTrigger.value === 0) return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && o2.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, o2.value.getVirtualItems().map((c2) => cloneVNode(h$12.default({ option: r.virtual.value.options[c2.index], open: r.comboboxState.value === 0 })[0], { key: `${e2.value}-${c2.index}`, "data-index": c2.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": c2.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c2.start}px)`, overflowAnchor: "none" } })))];
} }), lt = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a2, { slots: h$12, attrs: r, emit: y2 }) {
  let o2 = ref(1), u2 = ref(null), e2 = ref(null), c2 = ref(null), f2 = ref(null), S2 = ref({ static: false, hold: false }), v2 = ref([]), d2 = ref(null), D = ref(2), E2 = ref(false);
  function w2(t2 = (n2) => n2) {
    let n2 = d2.value !== null ? v2.value[d2.value] : null, s2 = t2(v2.value.slice()), b = s2.length > 0 && s2[0].dataRef.order.value !== null ? s2.sort((C, A2) => C.dataRef.order.value - A2.dataRef.order.value) : O(s2, (C) => o$1(C.dataRef.domRef)), O$1 = n2 ? b.indexOf(n2) : null;
    return O$1 === -1 && (O$1 = null), { options: b, activeOptionIndex: O$1 };
  }
  let M2 = computed(() => a2.multiple ? 1 : 0), $2 = computed(() => a2.nullable), [B2, p2] = d$3(computed(() => a2.modelValue), (t2) => y2("update:modelValue", t2), computed(() => a2.defaultValue)), R2 = computed(() => B2.value === void 0 ? u$3(M2.value, { [1]: [], [0]: void 0 }) : B2.value), V = null, i2 = null;
  function I(t2) {
    return u$3(M2.value, { [0]() {
      return p2 == null ? void 0 : p2(t2);
    }, [1]: () => {
      let n2 = toRaw(l2.value.value).slice(), s2 = toRaw(t2), b = n2.findIndex((O2) => l2.compare(s2, toRaw(O2)));
      return b === -1 ? n2.push(s2) : n2.splice(b, 1), p2 == null ? void 0 : p2(n2);
    } });
  }
  let T2 = computed(() => {
  });
  watch([T2], ([t2], [n2]) => {
    if (l2.virtual.value && t2 && n2 && d2.value !== null) {
      let s2 = t2.indexOf(n2[d2.value]);
      s2 !== -1 ? d2.value = s2 : d2.value = null;
    }
  });
  let l2 = { comboboxState: o2, value: R2, mode: M2, compare(t2, n2) {
    if (typeof a2.by == "string") {
      let s2 = a2.by;
      return (t2 == null ? void 0 : t2[s2]) === (n2 == null ? void 0 : n2[s2]);
    }
    return a2.by === null ? De(t2, n2) : a2.by(t2, n2);
  }, calculateIndex(t2) {
    return l2.virtual.value ? a2.by === null ? l2.virtual.value.options.indexOf(t2) : l2.virtual.value.options.findIndex((n2) => l2.compare(n2, t2)) : v2.value.findIndex((n2) => l2.compare(n2.dataRef.value, t2));
  }, defaultValue: computed(() => a2.defaultValue), nullable: $2, immediate: computed(() => false), virtual: computed(() => null), inputRef: e2, labelRef: u2, buttonRef: c2, optionsRef: f2, disabled: computed(() => a2.disabled), options: v2, change(t2) {
    p2(t2);
  }, activeOptionIndex: computed(() => {
    if (E2.value && d2.value === null && (l2.virtual.value ? l2.virtual.value.options.length > 0 : v2.value.length > 0)) {
      if (l2.virtual.value) {
        let n2 = l2.virtual.value.options.findIndex((s2) => {
          var b;
          return !((b = l2.virtual.value) != null && b.disabled(s2));
        });
        if (n2 !== -1) return n2;
      }
      let t2 = v2.value.findIndex((n2) => !n2.dataRef.disabled);
      if (t2 !== -1) return t2;
    }
    return d2.value;
  }), activationTrigger: D, optionsPropsRef: S2, closeCombobox() {
    E2.value = false, !a2.disabled && o2.value !== 1 && (o2.value = 1, d2.value = null);
  }, openCombobox() {
    if (E2.value = true, !a2.disabled && o2.value !== 0) {
      if (l2.value.value) {
        let t2 = l2.calculateIndex(l2.value.value);
        t2 !== -1 && (d2.value = t2);
      }
      o2.value = 0;
    }
  }, setActivationTrigger(t2) {
    D.value = t2;
  }, goToOption(t2, n2, s2) {
    E2.value = false, V !== null && cancelAnimationFrame(V), V = requestAnimationFrame(() => {
      if (a2.disabled || f2.value && !S2.value.static && o2.value === 1) return;
      if (l2.virtual.value) {
        d2.value = t2 === c$1.Specific ? n2 : f$2({ focus: t2 }, { resolveItems: () => l2.virtual.value.options, resolveActiveIndex: () => {
          var C, A2;
          return (A2 = (C = l2.activeOptionIndex.value) != null ? C : l2.virtual.value.options.findIndex((j) => {
            var q2;
            return !((q2 = l2.virtual.value) != null && q2.disabled(j));
          })) != null ? A2 : null;
        }, resolveDisabled: (C) => l2.virtual.value.disabled(C), resolveId() {
          throw new Error("Function not implemented.");
        } }), D.value = s2 != null ? s2 : 2;
        return;
      }
      let b = w2();
      if (b.activeOptionIndex === null) {
        let C = b.options.findIndex((A2) => !A2.dataRef.disabled);
        C !== -1 && (b.activeOptionIndex = C);
      }
      let O2 = t2 === c$1.Specific ? n2 : f$2({ focus: t2 }, { resolveItems: () => b.options, resolveActiveIndex: () => b.activeOptionIndex, resolveId: (C) => C.id, resolveDisabled: (C) => C.dataRef.disabled });
      d2.value = O2, D.value = s2 != null ? s2 : 2, v2.value = b.options;
    });
  }, selectOption(t2) {
    let n2 = v2.value.find((b) => b.id === t2);
    if (!n2) return;
    let { dataRef: s2 } = n2;
    I(s2.value);
  }, selectActiveOption() {
    if (l2.activeOptionIndex.value !== null) {
      if (l2.virtual.value) I(l2.virtual.value.options[l2.activeOptionIndex.value]);
      else {
        let { dataRef: t2 } = v2.value[l2.activeOptionIndex.value];
        I(t2.value);
      }
      l2.goToOption(c$1.Specific, l2.activeOptionIndex.value);
    }
  }, registerOption(t2, n2) {
    let s2 = reactive({ id: t2, dataRef: n2 });
    if (l2.virtual.value) {
      v2.value.push(s2);
      return;
    }
    i2 && cancelAnimationFrame(i2);
    let b = w2((O2) => (O2.push(s2), O2));
    d2.value === null && l2.isSelected(n2.value.value) && (b.activeOptionIndex = b.options.indexOf(s2)), v2.value = b.options, d2.value = b.activeOptionIndex, D.value = 2, b.options.some((O2) => !o$1(O2.dataRef.domRef)) && (i2 = requestAnimationFrame(() => {
      let O2 = w2();
      v2.value = O2.options, d2.value = O2.activeOptionIndex;
    }));
  }, unregisterOption(t2, n2) {
    if (V !== null && cancelAnimationFrame(V), n2 && (E2.value = true), l2.virtual.value) {
      v2.value = v2.value.filter((b) => b.id !== t2);
      return;
    }
    let s2 = w2((b) => {
      let O2 = b.findIndex((C) => C.id === t2);
      return O2 !== -1 && b.splice(O2, 1), b;
    });
    v2.value = s2.options, d2.value = s2.activeOptionIndex, D.value = 2;
  }, isSelected(t2) {
    return u$3(M2.value, { [0]: () => l2.compare(toRaw(l2.value.value), toRaw(t2)), [1]: () => toRaw(l2.value.value).some((n2) => l2.compare(toRaw(n2), toRaw(t2))) });
  }, isActive(t2) {
    return d2.value === l2.calculateIndex(t2);
  } };
  w$1([e2, c2, f2], () => l2.closeCombobox(), computed(() => o2.value === 0)), provide(ne, l2), t$4(computed(() => u$3(o2.value, { [0]: i$4.Open, [1]: i$4.Closed })));
  computed(() => {
    var t2;
    return (t2 = o$1(e2)) == null ? void 0 : t2.closest("form");
  });
  return () => {
    var C, A2, j;
    let { name: t2, disabled: n2, form: s2, ...b } = a2, O2 = { open: o2.value === 0, disabled: n2, activeIndex: l2.activeOptionIndex.value, activeOption: l2.activeOptionIndex.value === null ? null : l2.virtual.value ? l2.virtual.value.options[(C = l2.activeOptionIndex.value) != null ? C : 0] : (j = (A2 = l2.options.value[l2.activeOptionIndex.value]) == null ? void 0 : A2.dataRef.value) != null ? j : null, value: R2.value };
    return h(Fragment, [...t2 != null && R2.value != null ? e$1({ [t2]: R2.value }).map(([q2, ue2]) => h(f$1, E$2({ features: u$4.Hidden, key: q2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, disabled: n2, name: q2, value: ue2 }))) : [], A$3({ theirProps: { ...r, ...T$1(b, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O2, slots: h$12, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r }) {
  var e2;
  let y2 = (e2 = a2.id) != null ? e2 : `headlessui-combobox-label-${i$2()}`, o2 = K("ComboboxLabel");
  function u2() {
    var c2;
    (c2 = o$1(o2.inputRef)) == null || c2.focus({ preventScroll: true });
  }
  return () => {
    let c2 = { open: o2.comboboxState.value === 0, disabled: o2.disabled.value }, { ...f2 } = a2, S2 = { id: y2, ref: o2.labelRef, onClick: u2 };
    return A$3({ ourProps: S2, theirProps: f2, slot: c2, attrs: h2, slots: r, name: "ComboboxLabel" });
  };
} });
let nt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a2, { attrs: h2, slots: r, expose: y2 }) {
  var S2;
  let o2 = (S2 = a2.id) != null ? S2 : `headlessui-combobox-button-${i$2()}`, u2 = K("ComboboxButton");
  y2({ el: u2.buttonRef, $el: u2.buttonRef });
  function e2(v2) {
    u2.disabled.value || (u2.comboboxState.value === 0 ? u2.closeCombobox() : (v2.preventDefault(), u2.openCombobox()), nextTick(() => {
      var d2;
      return (d2 = o$1(u2.inputRef)) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }
  function c2(v2) {
    switch (v2.key) {
      case o$2.ArrowDown:
        v2.preventDefault(), v2.stopPropagation(), u2.comboboxState.value === 1 && u2.openCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.ArrowUp:
        v2.preventDefault(), v2.stopPropagation(), u2.comboboxState.value === 1 && (u2.openCombobox(), nextTick(() => {
          u2.value.value || u2.goToOption(c$1.Last);
        })), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
      case o$2.Escape:
        if (u2.comboboxState.value !== 0) return;
        v2.preventDefault(), u2.optionsRef.value && !u2.optionsPropsRef.value.static && v2.stopPropagation(), u2.closeCombobox(), nextTick(() => {
          var d2;
          return (d2 = u2.inputRef.value) == null ? void 0 : d2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let f2 = s$2(computed(() => ({ as: a2.as, type: h2.type })), u2.buttonRef);
  return () => {
    var E2, w2;
    let v2 = { open: u2.comboboxState.value === 0, disabled: u2.disabled.value, value: u2.value.value }, { ...d2 } = a2, D = { ref: u2.buttonRef, id: o2, type: f2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (E2 = o$1(u2.optionsRef)) == null ? void 0 : E2.id, "aria-expanded": u2.comboboxState.value === 0, "aria-labelledby": u2.labelRef.value ? [(w2 = o$1(u2.labelRef)) == null ? void 0 : w2.id, o2].join(" ") : void 0, disabled: u2.disabled.value === true ? true : void 0, onKeydown: c2, onClick: e2 };
    return A$3({ ourProps: D, theirProps: d2, slot: v2, attrs: h2, slots: r, name: "ComboboxButton" });
  };
} }), it = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a2) => true }, setup(a2, { emit: h2, attrs: r, slots: y2, expose: o$3 }) {
  var V;
  let u2 = (V = a2.id) != null ? V : `headlessui-combobox-input-${i$2()}`, e2 = K("ComboboxInput");
  computed(() => i$3(o$1(e2.inputRef)));
  o$3({ el: e2.inputRef, $el: e2.inputRef });
  function S2() {
    e2.change(null);
    let i2 = o$1(e2.optionsRef);
    i2 && (i2.scrollTop = 0), e2.goToOption(c$1.Nothing);
  }
  computed(() => {
    var I;
    let i2 = e2.value.value;
    return o$1(e2.inputRef) ? typeof a2.displayValue != "undefined" && i2 !== void 0 ? (I = a2.displayValue(i2)) != null ? I : "" : typeof i2 == "string" ? i2 : "" : "";
  });
  let d2 = ref(false);
  function D() {
    d2.value = true;
  }
  function E2() {
    o().nextFrame(() => {
      d2.value = false;
    });
  }
  let w2 = t$2();
  function M2(i2) {
    switch (w2(() => {
    }), i2.key) {
      case o$2.Enter:
        if (e2.comboboxState.value !== 0 || d2.value) return;
        if (i2.preventDefault(), i2.stopPropagation(), e2.activeOptionIndex.value === null) {
          e2.closeCombobox();
          return;
        }
        e2.selectActiveOption(), e2.mode.value === 0 && e2.closeCombobox();
        break;
      case o$2.ArrowDown:
        return i2.preventDefault(), i2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Next), [1]: () => e2.openCombobox() });
      case o$2.ArrowUp:
        return i2.preventDefault(), i2.stopPropagation(), u$3(e2.comboboxState.value, { [0]: () => e2.goToOption(c$1.Previous), [1]: () => {
          e2.openCombobox(), nextTick(() => {
            e2.value.value || e2.goToOption(c$1.Last);
          });
        } });
      case o$2.Home:
        if (i2.shiftKey) break;
        return i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.PageUp:
        return i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
        if (i2.shiftKey) break;
        return i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.PageDown:
        return i2.preventDefault(), i2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        if (e2.comboboxState.value !== 0) return;
        i2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && i2.stopPropagation(), e2.nullable.value && e2.mode.value === 0 && e2.value.value === null && S2(), e2.closeCombobox();
        break;
      case o$2.Tab:
        if (e2.comboboxState.value !== 0) return;
        e2.mode.value === 0 && e2.activationTrigger.value !== 1 && e2.selectActiveOption(), e2.closeCombobox();
        break;
    }
  }
  function $2(i2) {
    h2("change", i2), e2.nullable.value && e2.mode.value === 0 && i2.target.value === "" && S2(), e2.openCombobox();
  }
  function B2(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    if (!((l2 = o$1(e2.optionsRef)) != null && l2.contains(I)) && !((g2 = o$1(e2.buttonRef)) != null && g2.contains(I)) && e2.comboboxState.value === 0) return i2.preventDefault(), e2.mode.value === 0 && (e2.nullable.value && e2.value.value === null ? S2() : e2.activationTrigger.value !== 1 && e2.selectActiveOption()), e2.closeCombobox();
  }
  function p2(i2) {
    var T2, l2, g2;
    let I = (T2 = i2.relatedTarget) != null ? T2 : t$1.find((t2) => t2 !== i2.currentTarget);
    (l2 = o$1(e2.buttonRef)) != null && l2.contains(I) || (g2 = o$1(e2.optionsRef)) != null && g2.contains(I) || e2.disabled.value || e2.immediate.value && e2.comboboxState.value !== 0 && (e2.openCombobox(), o().nextFrame(() => {
      e2.setActivationTrigger(1);
    }));
  }
  let R2 = computed(() => {
    var i2, I, T2, l2;
    return (l2 = (T2 = (I = a2.defaultValue) != null ? I : e2.defaultValue.value !== void 0 ? (i2 = a2.displayValue) == null ? void 0 : i2.call(a2, e2.defaultValue.value) : null) != null ? T2 : e2.defaultValue.value) != null ? l2 : "";
  });
  return () => {
    var t2, n2, s2, b, O2, C, A2;
    let i2 = { open: e2.comboboxState.value === 0 }, { displayValue: I, onChange: T2, ...l2 } = a2, g2 = { "aria-controls": (t2 = e2.optionsRef.value) == null ? void 0 : t2.id, "aria-expanded": e2.comboboxState.value === 0, "aria-activedescendant": e2.activeOptionIndex.value === null ? void 0 : e2.virtual.value ? (n2 = e2.options.value.find((j) => !e2.virtual.value.disabled(j.dataRef.value) && e2.compare(j.dataRef.value, e2.virtual.value.options[e2.activeOptionIndex.value]))) == null ? void 0 : n2.id : (s2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : s2.id, "aria-labelledby": (C = (b = o$1(e2.labelRef)) == null ? void 0 : b.id) != null ? C : (O2 = o$1(e2.buttonRef)) == null ? void 0 : O2.id, "aria-autocomplete": "list", id: u2, onCompositionstart: D, onCompositionend: E2, onKeydown: M2, onInput: $2, onFocus: p2, onBlur: B2, role: "combobox", type: (A2 = r.type) != null ? A2 : "text", tabIndex: 0, ref: e2.inputRef, defaultValue: R2.value, disabled: e2.disabled.value === true ? true : void 0 };
    return A$3({ ourProps: g2, theirProps: l2, slot: i2, attrs: r, slots: y2, features: N$3.RenderStrategy | N$3.Static, name: "ComboboxInput" });
  };
} }), ut = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a2, { attrs: h$12, slots: r, expose: y2 }) {
  let o2 = K("ComboboxOptions"), u2 = `headlessui-combobox-options-${i$2()}`;
  y2({ el: o2.optionsRef, $el: o2.optionsRef }), watchEffect(() => {
    o2.optionsPropsRef.value.static = a2.static;
  }), watchEffect(() => {
    o2.optionsPropsRef.value.hold = a2.hold;
  });
  let e2 = l$1(), c2 = computed(() => e2 !== null ? (e2.value & i$4.Open) === i$4.Open : o2.comboboxState.value === 0);
  i$5({ container: computed(() => o$1(o2.optionsRef)), enabled: computed(() => o2.comboboxState.value === 0), accept(S2) {
    return S2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : S2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S2) {
    S2.setAttribute("role", "none");
  } });
  function f2(S2) {
    S2.preventDefault();
  }
  return () => {
    var D, E2, w2;
    let S2 = { open: o2.comboboxState.value === 0 }, v2 = { "aria-labelledby": (w2 = (D = o$1(o2.labelRef)) == null ? void 0 : D.id) != null ? w2 : (E2 = o$1(o2.buttonRef)) == null ? void 0 : E2.id, id: u2, ref: o2.optionsRef, role: "listbox", "aria-multiselectable": o2.mode.value === 1 ? true : void 0, onMousedown: f2 }, d2 = T$1(a2, ["hold"]);
    return A$3({ ourProps: v2, theirProps: d2, slot: S2, attrs: h$12, slots: o2.virtual.value && o2.comboboxState.value === 0 ? { ...r, default: () => [h(Ae$1, {}, r.default)] } : r, features: N$3.RenderStrategy | N$3.Static, visible: c2.value, name: "ComboboxOptions" });
  };
} }), rt = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a2, { slots: h2, attrs: r, expose: y2 }) {
  let o2 = K("ComboboxOption"), u2 = `headlessui-combobox-option-${i$2()}`, e2 = ref(null), c2 = computed(() => a2.disabled);
  y2({ el: e2, $el: e2 });
  let f2 = computed(() => {
    var p2;
    return o2.virtual.value ? o2.activeOptionIndex.value === o2.calculateIndex(a2.value) : o2.activeOptionIndex.value === null ? false : ((p2 = o2.options.value[o2.activeOptionIndex.value]) == null ? void 0 : p2.id) === u2;
  }), S2 = computed(() => o2.isSelected(a2.value)), v2 = inject(ie, null);
  computed(() => ({ disabled: a2.disabled, value: a2.value, domRef: e2, order: computed(() => a2.order) }));
  watchEffect(() => {
    let p2 = o$1(e2);
    p2 && (v2 == null || v2.value.measureElement(p2));
  }), watchEffect(() => {
    o2.comboboxState.value === 0 && f2.value && (o2.virtual.value || o2.activationTrigger.value !== 0 && nextTick(() => {
      var p2, R2;
      return (R2 = (p2 = o$1(e2)) == null ? void 0 : p2.scrollIntoView) == null ? void 0 : R2.call(p2, { block: "nearest" });
    }));
  });
  function D(p2) {
    p2.preventDefault(), p2.button === g$1.Left && (c2.value || (o2.selectOption(u2), n$1() || requestAnimationFrame(() => {
      var R2;
      return (R2 = o$1(o2.inputRef)) == null ? void 0 : R2.focus({ preventScroll: true });
    }), o2.mode.value === 0 && o2.closeCombobox()));
  }
  function E2() {
    var R2;
    if (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value)) return o2.goToOption(c$1.Nothing);
    let p2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, p2);
  }
  let w2 = u$2();
  function M2(p2) {
    w2.update(p2);
  }
  function $2(p2) {
    var V;
    if (!w2.wasMoved(p2) || a2.disabled || (V = o2.virtual.value) != null && V.disabled(a2.value) || f2.value) return;
    let R2 = o2.calculateIndex(a2.value);
    o2.goToOption(c$1.Specific, R2, 0);
  }
  function B2(p2) {
    var R2;
    w2.wasMoved(p2) && (a2.disabled || (R2 = o2.virtual.value) != null && R2.disabled(a2.value) || f2.value && (o2.optionsPropsRef.value.hold || o2.goToOption(c$1.Nothing)));
  }
  return () => {
    let { disabled: p2 } = a2, R2 = { active: f2.value, selected: S2.value, disabled: p2 }, V = { id: u2, ref: e2, role: "option", tabIndex: p2 === true ? void 0 : -1, "aria-disabled": p2 === true ? true : void 0, "aria-selected": S2.value, disabled: void 0, onMousedown: D, onFocus: E2, onPointerenter: M2, onMouseenter: M2, onPointermove: $2, onMousemove: $2, onPointerleave: B2, onMouseleave: B2 }, i2 = T$1(a2, ["order", "value"]);
    return A$3({ ourProps: V, theirProps: i2, slot: R2, attrs: r, slots: h2, name: "ComboboxOption" });
  };
} });
function E$1(n2, e2, o2, r) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$2("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r of t2.value) {
    let l2 = o$1(r);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  $$2({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$1(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$3(f2.value, { [d$2.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function F(u2) {
    u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s2.value ? P(o$1(o2), u$3(f2.value, { [d$2.Forwards]: () => N$4.Next, [d$2.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h(Fragment, [Boolean(d2 & 4) && h(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r, name: "FocusTrap" }), Boolean(d2 & 4) && h(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r], [l2]) => {
    l2 === true && r === false ? t$3(() => {
      n2.value.splice(0);
    }) : l2 === false && r === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r : null;
  };
}
function $$2({ ownerDocument: t2 }, n2) {
  W$1(n2);
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r }, l2) {
  let o2 = ref(null);
  ref(false);
  return o2;
}
function J({ ownerDocument: t2, container: n2, containers: r, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S(a2)) : (e2.preventDefault(), e2.stopPropagation(), S(f2)) : S(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r of t2) if (r.contains(n2)) return true;
  return false;
}
function m$1(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  return t$5() ? { before({ doc: r, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
        let t2 = o();
        t2.style(r.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o$12 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o$12 !== t2 && (void 0).scrollTo(0, o$12), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o$12;
  let t2 = (o$12 = this.get(e2)) != null ? o$12 : { doc: e2, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m(t2) }, c$12 = [w(), c(), l()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$1(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2) return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$1(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h(f$1, { features: u$4.Hidden, ref: t2 });
  } };
}
function v() {
  let o2 = ref(null);
  return { mainTreeNodeRef: o2, MainTreeNode() {
    return h(f$1, { features: u$4.Hidden, ref: o2 });
  } };
}
let e = /* @__PURE__ */ Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$1 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
let u = /* @__PURE__ */ Symbol("StackContext");
var s = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s || {});
function y() {
  return inject(u, () => {
  });
}
function R$1({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  provide(u, t2);
}
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r = t2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r);
}
const f = /* @__PURE__ */ new WeakMap();
function U$1(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U$1(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $$1 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r = ref(null);
  computed(() => i$3(r));
  let o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d, null), g2 = false;
  getCurrentInstance();
  return watch(r, () => {
    if (g2 || !v2) return;
    let a2 = o$1(r);
    a2 && (g2 = true);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h(Teleport, { to: n2.value }, A$3({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d = /* @__PURE__ */ Symbol("PortalParentContext");
function q() {
  let e2 = inject(d, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r(o2);
  }
  function r(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = /* @__PURE__ */ Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r), () => {
    let { target: i2, ...o2 } = e2;
    return A$3({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = /* @__PURE__ */ Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$2()}`, u2 = ref(false);
  let r = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r || (r = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$1(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$4.Open) === i$4.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K2, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h$12.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$4.Closing) === i$4.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le2 = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le2, te);
  let ae2 = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K2)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae2), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$3(e2, { [s.Add]: () => D.value += 1, [s.Remove]: () => D.value -= 1 });
  } });
  let re2 = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h$12 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h$12);
  let ne2 = computed(() => !(!k$1.value || w2.value));
  w$1(B2, (e2, a2) => {
    e2.preventDefault(), h$12.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne2);
  let ie2 = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie2.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), h$12.close()));
  });
  let ue2 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$1(E$22, ue2, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$1(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h$12.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re2.value }, L2 = { open: c2.value === 0 };
    return h(u$1, { force: true }, () => [h($$1, () => h(z, { target: m2.value }, () => h(u$1, { force: false }, () => h(ue$1, { initialFocus: a2, containers: B2, features: k$1.value ? u$3(ee.value, { parent: ue$1.features.RestoreFocus, leaf: ue$1.features.All & ~ue$1.features.FocusLock }) : ue$1.features.None }, () => h(X, {}, () => A$3({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$2()}`, s2 = T("DialogOverlay");
  function n2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), s2.close());
  }
  return () => {
    let { ...r } = t2;
    return A$3({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r;
  let s2 = (r = t2.id) != null ? r : `headlessui-dialog-backdrop-${i$2()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), () => {
    let { ...g2 } = t2, D = { id: s2, ref: u2, "aria-hidden": true };
    return h(u$1, { force: true }, () => h($$1, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge$1 = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r;
  let s2 = (r = t2.id) != null ? r : `headlessui-dialog-panel-${i$2()}`, n2 = T("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s2, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$2()}`, s2 = T("DialogTitle");
  return () => {
    let { ...u2 } = t2;
    return A$3({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function pe$1(o2, b) {
  return o2 === b;
}
var ce$1 = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ce$1 || {}), ve = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(ve || {}), be = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(be || {});
function me$1(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = /* @__PURE__ */ Symbol("ListboxContext");
function A(o2) {
  let b = inject($, null);
  if (b === null) {
    let r = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, A), r;
  }
  return b;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe$1 }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b, attrs: r, emit: w2 }) {
  let n2 = ref(1), e2 = ref(null), f2 = ref(null), v2 = ref(null), s2 = ref([]), m2 = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s2.value[p2.value] : null, l2 = O(t2(s2.value.slice()), (O2) => o$1(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y2, L2] = d$3(computed(() => o2.modelValue), (t2) => w2("update:modelValue", t2), computed(() => o2.defaultValue)), M2 = computed(() => y2.value === void 0 ? u$3(D.value, { [1]: [], [0]: void 0 }) : y2.value), k2 = { listboxState: n2, value: M2, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e2, buttonRef: f2, optionsRef: v2, disabled: computed(() => o2.disabled), options: s2, searchQuery: m2, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1) return;
    let d2 = u2(), O2 = f$2(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m2.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s2.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1) return;
    let l2 = m2.value !== "" ? 0 : 1;
    m2.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s2.value.slice(p2.value + l2).concat(s2.value.slice(0, p2.value + l2)) : s2.value).find((I) => I.dataRef.textValue.startsWith(m2.value) && !I.dataRef.disabled), h2 = O2 ? s2.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m2.value !== "" && (m2.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s2.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s2.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L2(t2);
  }, select(t2) {
    o2.disabled || L2(u$3(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k2.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k2.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w$1([f2, v2], (t2, i2) => {
    var l2;
    k2.closeListbox(), w$3(i2, h$1.Loose) || (t2.preventDefault(), (l2 = o$1(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k2), t$4(computed(() => u$3(n2.value, { [0]: i$4.Open, [1]: i$4.Closed })));
  computed(() => {
    var t2;
    return (t2 = o$1(f2)) == null ? void 0 : t2.closest("form");
  });
  return () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h$12 = { open: n2.value === 0, disabled: l2, value: M2.value };
    return h(Fragment, [...t2 != null && M2.value != null ? e$1({ [t2]: M2.value }).map(([I, Q2]) => h(f$1, E$2({ features: u$4.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I, value: Q2 }))) : [], A$3({ ourProps: {}, theirProps: { ...r, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h$12, slots: b, attrs: r, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${i$2()}`, n2 = A("ListboxLabel");
  function e2() {
    var v2;
    (v2 = o$1(n2.buttonRef)) == null || v2.focus({ preventScroll: true });
  }
  return () => {
    let v2 = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s2 } = o2, m2 = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$3({ ourProps: m2, theirProps: s2, slot: v2, attrs: b, slots: r, name: "ListboxLabel" });
  };
} });
let je$1 = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${i$2()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$1(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$2.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$1(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v2(a2) {
    switch (a2.key) {
      case o$2.Space:
        a2.preventDefault();
        break;
    }
  }
  function s2(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me$1(() => {
      var u2;
      return (u2 = o$1(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m2 = s$2(computed(() => ({ as: o2.as, type: b.type })), e2.buttonRef);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$1(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L2 = o$1(e2.labelRef)) == null ? void 0 : L2.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v2, onClick: s2 };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b, slots: r, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${i$2()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v2(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "") return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$3(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Next);
      case u$3(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
      case o$2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$1(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s2 = l$1(), m2 = computed(() => s2 !== null ? (s2.value & i$4.Open) === i$4.Open : e2.listboxState.value === 0);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L2 = o$1(e2.buttonRef)) == null ? void 0 : L2.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b, slots: r, features: N$3.RenderStrategy | N$3.Static, visible: m2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b, attrs: r, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${i$2()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s2 = computed(() => u$3(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) }));
  computed(() => u$3(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
  }, [0]: () => s2.value }));
  let p$1 = p(f2);
  computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  watchEffect(() => {
    e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$1(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled) return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$1(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled) return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n2);
  }
  let y2 = u$2();
  function L2(t2) {
    y2.update(t2);
  }
  function M2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value || e2.goToOption(c$1.Specific, n2, 0));
  }
  function k2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v2.value, selected: s2.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s2.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L2, onMouseenter: L2, onPointermove: M2, onMousemove: M2, onPointerleave: k2, onMouseleave: k2 };
    return A$3({ ourProps: h2, theirProps: O2, slot: i2, attrs: r, slots: b, name: "ListboxOption" });
  };
} });
var Se$1 = ((s2) => (s2[s2.Open = 0] = "Open", s2[s2.Closed = 1] = "Closed", s2))(Se$1 || {});
let re = /* @__PURE__ */ Symbol("PopoverContext");
function U(d2) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s2 = new Error(`<${d2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s2, U), s2;
  }
  return P2;
}
let le = /* @__PURE__ */ Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = /* @__PURE__ */ Symbol("PopoverPanelContext");
function ge$1() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { slots: P2, attrs: s2, expose: h$2 }) {
  var u2;
  let f2 = ref(null);
  h$2({ el: f2, $el: f2 });
  let t2 = ref(1), o2 = ref(null), y2 = ref(null), v2 = ref(null), m2 = ref(null), b = computed(() => i$3(f2)), E2 = computed(() => {
    var L2, $2;
    if (!o$1(o2) || !o$1(m2)) return false;
    for (let x2 of (void 0).querySelectorAll("body > *")) if (Number(x2 == null ? void 0 : x2.contains(o$1(o2))) ^ Number(x2 == null ? void 0 : x2.contains(o$1(m2)))) return true;
    let e2 = E$3(), r = e2.indexOf(o$1(o2)), l2 = (r + e2.length - 1) % e2.length, g2 = (r + 1) % e2.length, G = e2[l2], C = e2[g2];
    return !((L2 = o$1(m2)) != null && L2.contains(G)) && !(($2 = o$1(m2)) != null && $2.contains(C));
  }), a2 = { popoverState: t2, buttonId: ref(null), panelId: ref(null), panel: m2, button: o2, isPortalled: E2, beforePanelSentinel: y2, afterPanelSentinel: v2, togglePopover() {
    t2.value = u$3(t2.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t2.value !== 1 && (t2.value = 1);
  }, close(e2) {
    a2.closePopover();
    let r = (() => e2 ? e2 instanceof HTMLElement ? e2 : e2.value instanceof HTMLElement ? o$1(e2) : o$1(a2.button) : o$1(a2.button))();
    r == null || r.focus();
  } };
  provide(re, a2), t$4(computed(() => u$3(t2.value, { [0]: i$4.Open, [1]: i$4.Closed })));
  let S2 = { buttonId: a2.buttonId, panelId: a2.panelId, close() {
    a2.closePopover();
  } }, c2 = ae(), I = c2 == null ? void 0 : c2.registerPopover, [F, w2] = q(), i2 = N$1({ mainTreeNodeRef: c2 == null ? void 0 : c2.mainTreeNodeRef, portals: F, defaultContainers: [o2, m2] });
  function p2() {
    var e2, r, l2, g2;
    return (g2 = c2 == null ? void 0 : c2.isFocusWithinPopoverGroup()) != null ? g2 : ((e2 = b.value) == null ? void 0 : e2.activeElement) && (((r = o$1(o2)) == null ? void 0 : r.contains(b.value.activeElement)) || ((l2 = o$1(m2)) == null ? void 0 : l2.contains(b.value.activeElement)));
  }
  return watchEffect(() => I == null ? void 0 : I(S2)), E$1((u2 = b.value) == null ? void 0 : u2.defaultView, "focus", (e2) => {
    var r, l2;
    e2.target !== void 0 && e2.target instanceof HTMLElement && t2.value === 0 && (p2() || o2 && m2 && (i2.contains(e2.target) || (r = o$1(a2.beforePanelSentinel)) != null && r.contains(e2.target) || (l2 = o$1(a2.afterPanelSentinel)) != null && l2.contains(e2.target) || a2.closePopover()));
  }, true), w$1(i2.resolveContainers, (e2, r) => {
    var l2;
    a2.closePopover(), w$3(r, h$1.Loose) || (e2.preventDefault(), (l2 = o$1(o2)) == null || l2.focus());
  }, computed(() => t2.value === 0)), () => {
    let e2 = { open: t2.value === 0, close: a2.close };
    return h(Fragment, [h(w2, {}, () => A$3({ theirProps: { ...d2, ...s2 }, ourProps: { ref: f2 }, slot: e2, slots: P2, attrs: s2, name: "Popover" })), h(i2.MainTreeNode)]);
  };
} }), Ge = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s2, expose: h$12 }) {
  var u2;
  let f2 = (u2 = d2.id) != null ? u2 : `headlessui-popover-button-${i$2()}`, t2 = U("PopoverButton"), o2 = computed(() => i$3(t2.button));
  h$12({ el: t2.button, $el: t2.button });
  let y2 = ae(), v2 = y2 == null ? void 0 : y2.closeOthers, m2 = ge$1(), b = computed(() => m2 === null ? false : m2.value === t2.panelId.value), E2 = ref(null), a2 = `headlessui-focus-sentinel-${i$2()}`;
  b.value || watchEffect(() => {
    t2.button.value = o$1(E2);
  });
  let S2 = s$2(computed(() => ({ as: d2.as, type: P$1.type })), E2);
  function c2(e2) {
    var r, l2, g2, G, C;
    if (b.value) {
      if (t2.popoverState.value === 1) return;
      switch (e2.key) {
        case o$2.Space:
        case o$2.Enter:
          e2.preventDefault(), (l2 = (r = e2.target).click) == null || l2.call(r), t2.closePopover(), (g2 = o$1(t2.button)) == null || g2.focus();
          break;
      }
    } else switch (e2.key) {
      case o$2.Space:
      case o$2.Enter:
        e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover();
        break;
      case o$2.Escape:
        if (t2.popoverState.value !== 0) return v2 == null ? void 0 : v2(t2.buttonId.value);
        if (!o$1(t2.button) || (G = o2.value) != null && G.activeElement && !((C = o$1(t2.button)) != null && C.contains(o2.value.activeElement))) return;
        e2.preventDefault(), e2.stopPropagation(), t2.closePopover();
        break;
    }
  }
  function I(e2) {
    b.value || e2.key === o$2.Space && e2.preventDefault();
  }
  function F(e2) {
    var r, l2;
    d2.disabled || (b.value ? (t2.closePopover(), (r = o$1(t2.button)) == null || r.focus()) : (e2.preventDefault(), e2.stopPropagation(), t2.popoverState.value === 1 && (v2 == null || v2(t2.buttonId.value)), t2.togglePopover(), (l2 = o$1(t2.button)) == null || l2.focus()));
  }
  function w2(e2) {
    e2.preventDefault(), e2.stopPropagation();
  }
  let i2 = n();
  function p2() {
    let e2 = o$1(t2.panel);
    if (!e2) return;
    function r() {
      u$3(i2.value, { [d$2.Forwards]: () => P(e2, N$4.First), [d$2.Backwards]: () => P(e2, N$4.Last) }) === T$2.Error && P(E$3().filter((g2) => g2.dataset.headlessuiFocusGuard !== "true"), u$3(i2.value, { [d$2.Forwards]: N$4.Next, [d$2.Backwards]: N$4.Previous }), { relativeTo: o$1(t2.button) });
    }
    r();
  }
  return () => {
    let e2 = t2.popoverState.value === 0, r = { open: e2 }, { ...l2 } = d2, g2 = b.value ? { ref: E2, type: S2.value, onKeydown: c2, onClick: F } : { ref: E2, id: f2, type: S2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$1(t2.panel) ? t2.panelId.value : void 0, disabled: d2.disabled ? true : void 0, onKeydown: c2, onKeyup: I, onClick: F, onMousedown: w2 };
    return h(Fragment, [A$3({ ourProps: g2, theirProps: { ...P$1, ...l2 }, slot: r, attrs: P$1, slots: s2, name: "PopoverButton" }), e2 && !b.value && t2.isPortalled.value && h(f$1, { id: a2, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p2 })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d2, { attrs: P2, slots: s2 }) {
  let h2 = U("PopoverOverlay"), f2 = `headlessui-popover-overlay-${i$2()}`, t2 = l$1(), o2 = computed(() => t2 !== null ? (t2.value & i$4.Open) === i$4.Open : h2.popoverState.value === 0);
  function y2() {
    h2.closePopover();
  }
  return () => {
    let v2 = { open: h2.popoverState.value === 0 };
    return A$3({ ourProps: { id: f2, "aria-hidden": true, onClick: y2 }, theirProps: d2, slot: v2, attrs: P2, slots: s2, features: N$3.RenderStrategy | N$3.Static, visible: o2.value, name: "PopoverOverlay" });
  };
} });
let je = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d2, { attrs: P$1, slots: s2, expose: h$12 }) {
  var w2;
  let f2 = (w2 = d2.id) != null ? w2 : `headlessui-popover-panel-${i$2()}`, { focus: t2 } = d2, o2 = U("PopoverPanel"), y2 = computed(() => i$3(o2.panel)), v2 = `headlessui-focus-sentinel-before-${i$2()}`, m2 = `headlessui-focus-sentinel-after-${i$2()}`;
  h$12({ el: o2.panel, $el: o2.panel }), provide(ue, o2.panelId), watchEffect(() => {
    var p2, u2;
    if (!t2 || o2.popoverState.value !== 0 || !o2.panel) return;
    let i2 = (p2 = y2.value) == null ? void 0 : p2.activeElement;
    (u2 = o$1(o2.panel)) != null && u2.contains(i2) || P(o$1(o2.panel), N$4.First);
  });
  let b = l$1(), E2 = computed(() => b !== null ? (b.value & i$4.Open) === i$4.Open : o2.popoverState.value === 0);
  function a2(i2) {
    var p2, u2;
    switch (i2.key) {
      case o$2.Escape:
        if (o2.popoverState.value !== 0 || !o$1(o2.panel) || y2.value && !((p2 = o$1(o2.panel)) != null && p2.contains(y2.value.activeElement))) return;
        i2.preventDefault(), i2.stopPropagation(), o2.closePopover(), (u2 = o$1(o2.button)) == null || u2.focus();
        break;
    }
  }
  function S2(i2) {
    var u2, e2, r, l2, g2;
    let p2 = i2.relatedTarget;
    p2 && o$1(o2.panel) && ((u2 = o$1(o2.panel)) != null && u2.contains(p2) || (o2.closePopover(), ((r = (e2 = o$1(o2.beforePanelSentinel)) == null ? void 0 : e2.contains) != null && r.call(e2, p2) || (g2 = (l2 = o$1(o2.afterPanelSentinel)) == null ? void 0 : l2.contains) != null && g2.call(l2, p2)) && p2.focus({ preventScroll: true })));
  }
  let c2 = n();
  function I() {
    let i2 = o$1(o2.panel);
    if (!i2) return;
    function p2() {
      u$3(c2.value, { [d$2.Forwards]: () => {
        var e2;
        P(i2, N$4.First) === T$2.Error && ((e2 = o$1(o2.afterPanelSentinel)) == null || e2.focus());
      }, [d$2.Backwards]: () => {
        var u2;
        (u2 = o$1(o2.button)) == null || u2.focus({ preventScroll: true });
      } });
    }
    p2();
  }
  function F() {
    let i2 = o$1(o2.panel);
    if (!i2) return;
    function p2() {
      u$3(c2.value, { [d$2.Forwards]: () => {
        let u2 = o$1(o2.button), e2 = o$1(o2.panel);
        if (!u2) return;
        let r = E$3(), l2 = r.indexOf(u2), g2 = r.slice(0, l2 + 1), C = [...r.slice(l2 + 1), ...g2];
        for (let L2 of C.slice()) if (L2.dataset.headlessuiFocusGuard === "true" || e2 != null && e2.contains(L2)) {
          let $2 = C.indexOf(L2);
          $2 !== -1 && C.splice($2, 1);
        }
        P(C, N$4.First, { sorted: false });
      }, [d$2.Backwards]: () => {
        var e2;
        P(i2, N$4.Previous) === T$2.Error && ((e2 = o$1(o2.button)) == null || e2.focus());
      } });
    }
    p2();
  }
  return () => {
    let i2 = { open: o2.popoverState.value === 0, close: o2.close }, { focus: p2, ...u2 } = d2, e2 = { ref: o2.panel, id: f2, onKeydown: a2, onFocusout: t2 && o2.popoverState.value === 0 ? S2 : void 0, tabIndex: -1 };
    return A$3({ ourProps: e2, theirProps: { ...P$1, ...u2 }, attrs: P$1, slot: i2, slots: { ...s2, default: (...r) => {
      var l2;
      return [h(Fragment, [E2.value && o2.isPortalled.value && h(f$1, { id: v2, ref: o2.beforePanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I }), (l2 = s2.default) == null ? void 0 : l2.call(s2, ...r), E2.value && o2.isPortalled.value && h(f$1, { id: m2, ref: o2.afterPanelSentinel, features: u$4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F })])];
    } }, features: N$3.RenderStrategy | N$3.Static, visible: E2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d2, { attrs: P2, slots: s2, expose: h$12 }) {
  let f2 = ref(null), t2 = shallowRef([]), o2 = computed(() => i$3(f2)), y2 = v();
  h$12({ el: f2, $el: f2 });
  function v$1(a2) {
    let S2 = t2.value.indexOf(a2);
    S2 !== -1 && t2.value.splice(S2, 1);
  }
  function m2(a2) {
    return t2.value.push(a2), () => {
      v$1(a2);
    };
  }
  function b() {
    var c2;
    let a2 = o2.value;
    if (!a2) return false;
    let S2 = a2.activeElement;
    return (c2 = o$1(f2)) != null && c2.contains(S2) ? true : t2.value.some((I) => {
      var F, w2;
      return ((F = a2.getElementById(I.buttonId.value)) == null ? void 0 : F.contains(S2)) || ((w2 = a2.getElementById(I.panelId.value)) == null ? void 0 : w2.contains(S2));
    });
  }
  function E2(a2) {
    for (let S2 of t2.value) S2.buttonId.value !== a2 && S2.close();
  }
  return provide(le, { registerPopover: m2, unregisterPopover: v$1, isFocusWithinPopoverGroup: b, closeOthers: E2, mainTreeNodeRef: y2.mainTreeNodeRef }), () => h(Fragment, [A$3({ ourProps: { ref: f2 }, theirProps: { ...d2, ...P2 }, slot: {}, attrs: P2, slots: s2, name: "PopoverGroup" }), h(y2.MainTreeNode)]);
} });
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = /* @__PURE__ */ Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = /* @__PURE__ */ Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  function s2(n2, r = S$1.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$3(r, { [S$1.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$1.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s2(n2, S$1.Unmount);
  }
  return { children: t2, register: h2, unregister: s2 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2, expose: h$12 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= i$4.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$4.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$4.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~i$4.Closing, t2("afterLeave");
  }
  if (!me() && s$3()) return () => h(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s2);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S$1.Unmount : S$1.Hidden);
  h$12({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), c2 = i$2(), P2 = Q(() => {
    i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S2());
  });
  watchEffect(() => {
    if (y2.value === S$1.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$3(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e2.enter), M2 = g(e2.enterFrom);
  g(e2.enterTo);
  g(e2.entered);
  g(e2.leave);
  g(e2.leaveFrom);
  g(e2.leaveTo);
  return provide(N, P2), t$4(computed(() => u$3(i2.value, { ["visible"]: i$4.Open, ["hidden"]: i$4.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye2, leave: be2, leaveFrom: Ee2, leaveTo: Ve2, ...U2 } = e2, ne2 = { ref: d2 }, re2 = { ...U2, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j, ...M2]) } : {} };
    return A$3({ theirProps: re2, ourProps: ne2, slot: {}, slots: s2, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s2 }) {
  let h$12 = l$1(), n2 = computed(() => e2.show === null && h$12 !== null ? (h$12.value & i$4.Open) === i$4.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s2.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config$6 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
const _sfc_main$c = defineComponent({
  components: {
    UKbd: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: () => config$6.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$6.default.closeDelay
    },
    popper: {
      type: Object,
      default: () => ({})
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
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config$6, toRef(props, "class"));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    const isVisible = computed(() => !!(useSlots().text || props.text));
    function onMouseEnter() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      open,
      onMouseEnter,
      onMouseLeave,
      isVisible
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UKbd = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "trigger",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { open: _ctx.open }, () => {
    _push(` Hover `);
  }, _push, _parent);
  if (_ctx.open && !_ctx.prevent && _ctx.isVisible) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}"><template><div>`);
    if (_ctx.popper.arrow) {
      _push(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.background, _ctx.ui.color, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.ring])}">`);
    ssrRenderSlot(_ctx.$slots, "text", {}, () => {
      _push(`${ssrInterpolate(_ctx.text)}`);
    }, _push, _parent);
    if (_ctx.shortcuts?.length) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.shortcuts)}"><span class="${ssrRenderClass(_ctx.ui.middot)}">·</span><!--[-->`);
      ssrRenderList(_ctx.shortcuts, (shortcut) => {
        _push(ssrRenderComponent(_component_UKbd, {
          key: shortcut,
          size: "xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(shortcut)}`);
            } else {
              return [
                createTextVNode(toDisplayString(shortcut), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></template></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Tooltip.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$b = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$5.default.animation,
      validator(value) {
        return Object.keys(config$5.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$5.default.size,
      validator(value) {
        return Object.keys(config$5.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$5.default.color,
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
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$5, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        ui.value.progress.color?.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      return twJoin(
        ui.value.steps.base,
        ui.value.steps.color?.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index) {
      return index === Number(props.value);
    }
    function isFirst(index) {
      return index === 0;
    }
    function stepClasses(index) {
      index = Number(index);
      const classes = [stepClass.value];
      if (isFirst(index)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    role: "progressbar"
  }, _attrs))} data-v-e0a22531>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-e0a22531><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-e0a22531>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({
    "aria-valuemax": _ctx.realMax,
    "aria-valuenow": _ctx.value,
    class: _ctx.progressClass
  }, { value: _ctx.value, max: _ctx.realMax, ..._ctx.attrs }))} data-v-e0a22531>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-e0a22531><!--[-->`);
    ssrRenderList(_ctx.max, (step, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index))}" data-v-e0a22531>`);
      ssrRenderSlot(_ctx.$slots, `step-${index}`, mergeProps({ ref_for: true }, { step }), () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-e0a22531"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CollectionStats",
  __ssrInlineRender: true,
  props: {
    fields: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const numericFields = computed(() => props.fields.filter((f2) => f2.type === "number"));
    const distributionFields = computed(() => props.fields.filter((f2) => ["select", "boolean"].includes(f2.type)));
    const itemsLast7Days = computed(() => {
      const sevenDaysAgo = /* @__PURE__ */ new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return props.items.filter((item) => new Date(item.created_at) >= sevenDaysAgo).length;
    });
    const getFillRate = (fieldId) => {
      if (props.items.length === 0) return 0;
      const filled = props.items.filter((row) => row[fieldId] !== null && row[fieldId] !== void 0 && row[fieldId] !== "").length;
      return Math.round(filled / props.items.length * 100);
    };
    const getFillColor = (rate) => {
      if (rate > 80) return "green";
      if (rate > 50) return "orange";
      return "red";
    };
    const getSum = (fieldId) => {
      return props.items.reduce((acc, row) => {
        const val = Number(row[fieldId]) || 0;
        return acc + val;
      }, 0);
    };
    const getAvg = (fieldId) => {
      if (props.items.length === 0) return 0;
      return getSum(fieldId) / props.items.length;
    };
    const getMax = (fieldId) => {
      if (props.items.length === 0) return 0;
      const vals = props.items.map((row) => Number(row[fieldId]) || 0);
      return Math.max(...vals);
    };
    const getMin = (fieldId) => {
      if (props.items.length === 0) return 0;
      const vals = props.items.map((row) => Number(row[fieldId]) || 0);
      return Math.min(...vals);
    };
    const getDistribution = (fieldId) => {
      const counts = {};
      const field = props.fields.find((f2) => f2.id === fieldId);
      props.items.forEach((row) => {
        let val = row[fieldId];
        if (field?.type === "boolean") {
          val = val ? "Sim" : "Não";
        } else if (val === null || val === void 0 || val === "") {
          val = "N/A";
        }
        counts[val] = (counts[val] || 0) + 1;
      });
      return Object.fromEntries(
        Object.entries(counts).sort(([, a2], [, b]) => b - a2)
      );
    };
    const getPercentage = (count, total) => {
      if (total === 0) return 0;
      return Math.round(count / total * 100);
    };
    const formatValue = (val) => {
      if (Number.isInteger(val)) return val.toLocaleString();
      return val.toLocaleString(void 0, { minimumFractionDigits: 1, maximumFractionDigits: 2 });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_9;
      const _component_UIcon = __nuxt_component_1$1;
      const _component_UProgress = __nuxt_component_2;
      if (__props.fields.length > 0 && __props.items.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8 space-y-6" }, _attrs))}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">`);
        _push(ssrRenderComponent(_component_UCard, { class: "bg-gradient-to-br from-primary-600 to-indigo-700 text-white shadow-lg overflow-hidden relative" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute -right-4 -bottom-4 opacity-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-rectangle-stack",
                class: "w-24 h-24"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative z-10"${_scopeId}><p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1"${_scopeId}>Total de Itens</p><div class="flex items-end gap-3"${_scopeId}><p class="text-4xl font-black"${_scopeId}>${ssrInterpolate(__props.items.length)}</p>`);
              if (unref(itemsLast7Days) > 0) {
                _push2(`<div class="flex items-center text-xs bg-white/20 px-2 py-0.5 rounded-full mb-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-arrow-trending-up",
                  class: "w-3 h-3 mr-1"
                }, null, _parent2, _scopeId));
                _push2(` +${ssrInterpolate(unref(itemsLast7Days))} esta semana </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute -right-4 -bottom-4 opacity-20" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-rectangle-stack",
                    class: "w-24 h-24"
                  })
                ]),
                createVNode("div", { class: "relative z-10" }, [
                  createVNode("p", { class: "text-xs font-bold uppercase tracking-widest opacity-80 mb-1" }, "Total de Itens"),
                  createVNode("div", { class: "flex items-end gap-3" }, [
                    createVNode("p", { class: "text-4xl font-black" }, toDisplayString(__props.items.length), 1),
                    unref(itemsLast7Days) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center text-xs bg-white/20 px-2 py-0.5 rounded-full mb-1"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-trending-up",
                        class: "w-3 h-3 mr-1"
                      }),
                      createTextVNode(" +" + toDisplayString(unref(itemsLast7Days)) + " esta semana ", 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(numericFields), (field) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: field.id,
            class: "border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm relative overflow-hidden group"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="absolute right-2 top-2 opacity-10 group-hover:opacity-20 transition-opacity"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-calculator",
                  class: "w-12 h-12"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="space-y-3"${_scopeId}><div${_scopeId}><p class="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1"${_scopeId}>${ssrInterpolate(field.name)} (Média)</p><p class="text-2xl font-black font-mono text-gray-900 dark:text-white leading-none"${_scopeId}>${ssrInterpolate(formatValue(getAvg(field.id)))}</p></div><div class="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-800 pt-2"${_scopeId}><div${_scopeId}><p class="text-[9px] text-gray-400 uppercase"${_scopeId}>Soma</p><p class="text-xs font-bold"${_scopeId}>${ssrInterpolate(formatValue(getSum(field.id)))}</p></div><div${_scopeId}><p class="text-[9px] text-gray-400 uppercase"${_scopeId}>Mín</p><p class="text-xs font-bold text-blue-500"${_scopeId}>${ssrInterpolate(formatValue(getMin(field.id)))}</p></div><div${_scopeId}><p class="text-[9px] text-gray-400 uppercase"${_scopeId}>Máx</p><p class="text-xs font-bold text-orange-500"${_scopeId}>${ssrInterpolate(formatValue(getMax(field.id)))}</p></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "absolute right-2 top-2 opacity-10 group-hover:opacity-20 transition-opacity" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-calculator",
                      class: "w-12 h-12"
                    })
                  ]),
                  createVNode("div", { class: "space-y-3" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1" }, toDisplayString(field.name) + " (Média)", 1),
                      createVNode("p", { class: "text-2xl font-black font-mono text-gray-900 dark:text-white leading-none" }, toDisplayString(formatValue(getAvg(field.id))), 1)
                    ]),
                    createVNode("div", { class: "grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-800 pt-2" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[9px] text-gray-400 uppercase" }, "Soma"),
                        createVNode("p", { class: "text-xs font-bold" }, toDisplayString(formatValue(getSum(field.id))), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[9px] text-gray-400 uppercase" }, "Mín"),
                        createVNode("p", { class: "text-xs font-bold text-blue-500" }, toDisplayString(formatValue(getMin(field.id))), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-[9px] text-gray-400 uppercase" }, "Máx"),
                        createVNode("p", { class: "text-xs font-bold text-orange-500" }, toDisplayString(formatValue(getMax(field.id))), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(unref(distributionFields), (field) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: field.id,
            class: "border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm"
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="p-1.5 bg-primary-100 dark:bg-primary-900/40 rounded text-primary-600 dark:text-primary-400"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "i-heroicons-chart-pie",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</div><h3 class="font-bold text-sm"${_scopeId}>${ssrInterpolate(field.name)}</h3></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "p-1.5 bg-primary-100 dark:bg-primary-900/40 rounded text-primary-600 dark:text-primary-400" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-chart-pie",
                          class: "w-4 h-4"
                        })
                      ]),
                      createVNode("h3", { class: "font-bold text-sm" }, toDisplayString(field.name), 1)
                    ])
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(getDistribution(field.id), (count, option) => {
                  _push2(`<div class="space-y-1.5"${_scopeId}><div class="flex justify-between items-center text-xs"${_scopeId}><span class="font-semibold text-gray-700 dark:text-gray-300 truncate max-w-[150px]"${_scopeId}>${ssrInterpolate(option)}</span><div class="flex items-center gap-2"${_scopeId}><span class="font-mono"${_scopeId}>${ssrInterpolate(count)}</span><span class="text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-[10px]"${_scopeId}>${ssrInterpolate(getPercentage(count, __props.items.length))}%</span></div></div>`);
                  _push2(ssrRenderComponent(_component_UProgress, {
                    value: getPercentage(count, __props.items.length),
                    size: "md",
                    color: "primary",
                    class: "h-2 rounded-full shadow-inner"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(getDistribution(field.id), (count, option) => {
                      return openBlock(), createBlock("div", {
                        key: option,
                        class: "space-y-1.5"
                      }, [
                        createVNode("div", { class: "flex justify-between items-center text-xs" }, [
                          createVNode("span", { class: "font-semibold text-gray-700 dark:text-gray-300 truncate max-w-[150px]" }, toDisplayString(option), 1),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "font-mono" }, toDisplayString(count), 1),
                            createVNode("span", { class: "text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-[10px]" }, toDisplayString(getPercentage(count, __props.items.length)) + "%", 1)
                          ])
                        ]),
                        createVNode(_component_UProgress, {
                          value: getPercentage(count, __props.items.length),
                          size: "md",
                          color: "primary",
                          class: "h-2 rounded-full shadow-inner"
                        }, null, 8, ["value"])
                      ]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_UCard, { class: "border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm lg:col-span-1 md:col-span-2" }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><div class="p-1.5 bg-amber-100 dark:bg-amber-900/40 rounded text-amber-600 dark:text-amber-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-check-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="font-bold text-sm"${_scopeId}>Completude dos Dados</h3></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("div", { class: "p-1.5 bg-amber-100 dark:bg-amber-900/40 rounded text-amber-600 dark:text-amber-400" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-check-circle",
                      class: "w-4 h-4"
                    })
                  ]),
                  createVNode("h3", { class: "font-bold text-sm" }, "Completude dos Dados")
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.fields.slice(0, 5), (field) => {
                _push2(`<div class="space-y-1.5"${_scopeId}><div class="flex justify-between items-center text-xs"${_scopeId}><span class="font-semibold text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(field.name)}</span><span class="font-mono"${_scopeId}>${ssrInterpolate(getFillRate(field.id))}%</span></div>`);
                _push2(ssrRenderComponent(_component_UProgress, {
                  value: getFillRate(field.id),
                  size: "sm",
                  color: getFillColor(getFillRate(field.id))
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
              if (__props.fields.length > 5) {
                _push2(`<p class="text-[10px] text-gray-400 text-center"${_scopeId}>+ ${ssrInterpolate(__props.fields.length - 5)} outros campos</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.fields.slice(0, 5), (field) => {
                    return openBlock(), createBlock("div", {
                      key: field.id,
                      class: "space-y-1.5"
                    }, [
                      createVNode("div", { class: "flex justify-between items-center text-xs" }, [
                        createVNode("span", { class: "font-semibold text-gray-600 dark:text-gray-400" }, toDisplayString(field.name), 1),
                        createVNode("span", { class: "font-mono" }, toDisplayString(getFillRate(field.id)) + "%", 1)
                      ]),
                      createVNode(_component_UProgress, {
                        value: getFillRate(field.id),
                        size: "sm",
                        color: getFillColor(getFillRate(field.id))
                      }, null, 8, ["value", "color"])
                    ]);
                  }), 128)),
                  __props.fields.length > 5 ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-[10px] text-gray-400 text-center"
                  }, "+ " + toDisplayString(__props.fields.length - 5) + " outros campos", 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionStats.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
const _sfc_main$9 = defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: Ge,
    HPopoverPanel: je
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: () => config$4.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$4.default.closeDelay
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
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
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config$4, toRef(props, "class"));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = props.popper?.offsetDistance || ui.value.popper?.offsetDistance || 8;
      const placement = popper.value.placement?.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !popoverApi.value || props.mode === "click") {
        return;
      }
      if (popoverApi.value.popoverState === 0) {
        popoverApi.value.closePopover();
      } else {
        popoverApi.value.togglePopover();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        if (popoverApi.value.togglePopover) {
          popoverApi.value.togglePopover();
        }
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        if (popoverApi.value.closePopover) {
          popoverApi.value.closePopover();
        }
        closeTimeout = null;
      }, props.closeDelay);
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!popoverApi.value) return;
      if (oldValue === void 0 || newValue === oldValue) return;
      if (newValue) {
        popoverApi.value.popoverState = 0;
      } else {
        popoverApi.value.closePopover();
      }
    });
    watch(() => popoverApi.value?.popoverState, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue) return;
      emit("update:open", newValue === 0);
    });
    s$4(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.overlay) {
          _push2(`<template>`);
          if (open) {
            _push2(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</template>`);
        } else {
          _push2(`<!---->`);
        }
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          _ctx.overlay ? (openBlock(), createBlock(Transition, mergeProps({
            key: 0,
            appear: ""
          }, _ctx.ui.overlay.transition), {
            default: withCtx(() => [
              open ? (openBlock(), createBlock("div", {
                key: 0,
                class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
              }, null, 2)) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040)) : createCommentVNode("", true),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HPopoverPanel, {
                    class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "panel", {
                        open,
                        close
                      })
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ])
              ]),
              _: 2
            }, 1040)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a2, z2) {
  return isEqual(a2, z2);
}
function defaultSort(a2, b, direction) {
  if (a2 === b) {
    return 0;
  }
  if (direction === "asc") {
    return a2 < b ? -1 : 1;
  } else {
    return a2 > b ? -1 : 1;
  }
}
function getStringifiedSet(arr) {
  return new Set(arr.map((item) => JSON.stringify(item)));
}
function accessor(key) {
  return (obj) => get(obj, key);
}
const _sfc_main$8 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$1,
    UButton: __nuxt_component_2$1,
    UProgress: __nuxt_component_2,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config$3.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config$3.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config$3.default.sortDescIcon
    },
    expandButton: {
      type: Object,
      default: () => config$3.default.expandButton
    },
    expand: {
      type: Object,
      default: () => null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config$3.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config$3.default.emptyState
    },
    caption: {
      type: String,
      default: null
    },
    progress: {
      type: Object,
      default: () => config$3.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    multipleExpand: {
      type: Boolean,
      default: true
    },
    singleSelect: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:sort", "update:expand", "select:all"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config$3, toRef(props, "class"));
    const columns = computed(() => {
      const defaultColumns = props.columns ?? Object.keys(props.rows[0]).map((key) => ({
        key,
        label: upperFirst(key),
        sortable: false,
        class: void 0,
        sort: defaultSort
      }));
      const hasColumnSelect = defaultColumns.find((v2) => v2.key === "select");
      if (hasColumnSelect || !props.modelValue) {
        return defaultColumns;
      }
      return [{
        key: "select",
        sortable: false,
        class: void 0,
        sort: defaultSort
      }, ...defaultColumns];
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const expand = useVModel(props, "expand", emit, {
      passive: true,
      defaultValue: defu({}, props.expand, {
        openedRows: [],
        row: null
      })
    });
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      if (!sort.value?.column || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a2, b) => {
        const aValue = get(a2, column);
        const bValue = get(b, column);
        const sort2 = columns.value.find((col) => col.key === column)?.sort ?? defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const totalRows = computed(() => props.rows.length);
    const countCheckedRow = computed(() => {
      const selectedData = getStringifiedSet(selected.value);
      const rowsData = getStringifiedSet(props.rows);
      return Array.from(selectedData).filter((item) => rowsData.has(item)).length;
    });
    const indeterminate = computed(() => {
      if (!selected.value || !props.rows) return false;
      return countCheckedRow.value > 0 && countCheckedRow.value < totalRows.value;
    });
    const isAllRowChecked = computed(() => countCheckedRow.value === totalRows.value);
    const emptyState = computed(() => {
      if (props.emptyState === null) return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null) return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a2, z2) {
      if (typeof props.by === "string") {
        const accesorFn = accessor(props.by);
        return accesorFn(a2) === accesorFn(z2);
      }
      return props.by(a2, z2);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      const selection = (void 0).getSelection();
      if (selection && selection.toString().length > 0) {
        return;
      }
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function onContextmenu(event, row) {
      if (!$attrs.onContextmenu) {
        return;
      }
      $attrs.onContextmenu(event, row);
    }
    function selectAllRows() {
      const newSelected = [...selected.value];
      props.rows.forEach((row) => {
        if (!isSelected(row)) {
          newSelected.push(row);
        }
      });
      selected.value = newSelected;
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
      emit("select:all", checked);
    }
    function onChangeCheckbox(checked, row) {
      if (checked) {
        selected.value = props.singleSelect ? [row] : [...selected.value, row];
      } else {
        selected.value = selected.value.filter((value) => !compare(toRaw(value), toRaw(row)));
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    function isExpanded(row) {
      return expand.value?.openedRows ? expand.value.openedRows.some((openedRow) => compare(openedRow, row)) : false;
    }
    function toggleOpened(row) {
      expand.value = {
        openedRows: isExpanded(row) ? expand.value.openedRows.filter((v2) => !compare(v2, row)) : props.multipleExpand ? [...expand.value.openedRows, row] : [row],
        row
      };
    }
    function getAriaSort(column) {
      if (!column.sortable) {
        return void 0;
      }
      if (sort.value.column !== column.key) {
        return "none";
      }
      if (sort.value.direction === "asc") {
        return "ascending";
      }
      if (sort.value.direction === "desc") {
        return "descending";
      }
      return void 0;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isAllRowChecked,
      onChangeCheckbox,
      isSelected,
      onSort,
      onSelect,
      onContextmenu,
      onChange,
      getRowData,
      toggleOpened,
      getAriaSort,
      isExpanded
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_2$1;
  const _component_UProgress = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}">`);
  if (_ctx.$slots.caption || _ctx.caption) {
    ssrRenderSlot(_ctx.$slots, "caption", {}, () => {
      _push(`<caption class="${ssrRenderClass(_ctx.ui.caption)}">${ssrInterpolate(_ctx.caption)}</caption>`);
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.expand) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.tr.base)}"><span class="sr-only">Expand</span></th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.key === "select" && _ctx.ui.checkbox.padding, column.class])}"${ssrRenderAttr("aria-sort", _ctx.getAriaSort(column))}>`);
    if (!_ctx.singleSelect && _ctx.modelValue && column.key === "select") {
      ssrRenderSlot(_ctx.$slots, "select-header", {
        indeterminate: _ctx.indeterminate,
        checked: _ctx.isAllRowChecked,
        change: _ctx.onChange
      }, () => {
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          "model-value": _ctx.isAllRowChecked,
          indeterminate: _ctx.indeterminate
        }, { ref_for: true }, _ctx.ui.default.checkbox, {
          "aria-label": "Select all",
          onChange: _ctx.onChange
        }), null, _parent));
      }, _push, _parent);
    } else {
      ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
        column,
        sort: _ctx.sort,
        onSort: _ctx.onSort
      }, () => {
        if (column.sortable) {
          _push(ssrRenderComponent(_component_UButton, mergeProps({ ref_for: true }, { ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
            icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
            label: column[_ctx.columnAttribute],
            onClick: ($event) => _ctx.onSort(column)
          }), null, _parent));
        } else {
          _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
        }
      }, _push, _parent);
    }
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0) + (_ctx.expand ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<!--[--><tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.isExpanded(row) && _ctx.ui.tr.expanded, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row?.class])}">`);
      if (_ctx.expand) {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        if (_ctx.$slots["expand-action"]) {
          ssrRenderSlot(_ctx.$slots, "expand-action", {
            row,
            isExpanded: _ctx.isExpanded(row),
            toggle: () => _ctx.toggleOpened(row)
          }, null, _push, _parent);
        } else {
          _push(ssrRenderComponent(_component_UButton, mergeProps({
            disabled: row.disabledExpand
          }, { ref_for: true }, { ..._ctx.ui.default.expandButton || {}, ..._ctx.expandButton }, {
            ui: { icon: { base: [_ctx.ui.expand.icon, _ctx.isExpanded(row) && "rotate-180"].join(" ") } },
            onClick: ($event) => _ctx.toggleOpened(row)
          }), null, _parent));
        }
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, column?.rowClass, row[column.key]?.class, column.key === "select" && _ctx.ui.checkbox.padding])}">`);
        if (_ctx.modelValue && column.key === "select") {
          _push(`<span>`);
          ssrRenderSlot(_ctx.$slots, "select-data", {
            checked: _ctx.isSelected(row),
            change: (ev) => _ctx.onChangeCheckbox(ev, row)
          }, () => {
            _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
              "model-value": _ctx.isSelected(row)
            }, { ref_for: true }, _ctx.ui.default.checkbox, {
              "aria-label": "Select row",
              onChange: ($event) => _ctx.onChangeCheckbox($event, row)
            }), null, _parent));
          }, _push, _parent);
          _push(`</span>`);
        } else {
          ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
            column,
            row,
            index,
            getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
          }, () => {
            _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
          }, _push, _parent);
        }
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
      if (_ctx.isExpanded(row)) {
        _push(`<tr><td colspan="100%">`);
        ssrRenderSlot(_ctx.$slots, "expand", {
          row,
          index
        }, null, _push, _parent);
        _push(`</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$7 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge$1,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
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
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$4(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const configMenu = mergeConfig(appConfig.ui.strategy, appConfig.ui.selectMenu, selectMenu);
const _sfc_main$6 = defineComponent({
  components: {
    HCombobox: lt,
    HComboboxButton: nt,
    HComboboxOptions: ut,
    HComboboxOption: rt,
    HComboboxInput: it,
    HListbox: Ie,
    HListboxButton: je$1,
    HListboxOptions: Ae,
    HListboxOption: Fe,
    UIcon: __nuxt_component_1$1,
    UAvatar: __nuxt_component_5$2
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: ""
    },
    query: {
      type: String,
      default: null
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config$1.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectedIcon: {
      type: String,
      default: () => configMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: () => configMenu.default.searchablePlaceholder.label
    },
    searchableLazy: {
      type: Boolean,
      default: false
    },
    clearSearchOnClose: {
      type: Boolean,
      default: () => configMenu.default.clearSearchOnClose
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    showCreateOptionWhen: {
      type: [String, Function],
      default: () => configMenu.default.showCreateOptionWhen
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    inputTargetForm: {
      type: String,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
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
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:query", "open", "close", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config$1, toRef(props, "class"));
    const { ui: uiMenu } = useUI("selectMenu", toRef(props, "uiMenu"), configMenu);
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const by = computed(() => {
      if (!props.by) return void 0;
      if (typeof props.by === "function") {
        return props.by;
      }
      const key = props.by;
      const hasDot = key.indexOf(".");
      if (hasDot > 0) {
        return (a2, z2) => {
          return accessor2(a2, key) === accessor2(z2, key);
        };
      }
      return key;
    });
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config$1);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const internalQuery = ref("");
    const query = computed({
      get() {
        return props.query ?? internalQuery.value;
      },
      set(value) {
        internalQuery.value = value;
        emit("update:query", value);
      }
    });
    const selected = computed(() => {
      function compareValues(value1, value2) {
        if (by.value && typeof by.value !== "function" && isObject(value1) && isObject(value2)) {
          return isEqual(value1[by.value], value2[by.value]);
        }
        return isEqual(value1, value2);
      }
      function getValue(value) {
        if (props.valueAttribute) {
          return accessor2(value, props.valueAttribute);
        }
        return value;
      }
      if (props.multiple) {
        const modelValue = props.modelValue;
        if (!Array.isArray(modelValue) || !modelValue.length) {
          return [];
        }
        return options.value.filter((option) => {
          const optionValue = getValue(option);
          return modelValue.some((value) => compareValues(value, optionValue));
        });
      }
      return options.value.find((option) => {
        const optionValue = getValue(option);
        return compareValues(optionValue, toRaw(props.modelValue));
      }) ?? props.modelValue;
    });
    const label = computed(() => {
      if (!props.modelValue) return null;
      if (Array.isArray(props.modelValue) && props.modelValue.length) {
        return `${props.modelValue.length} selected`;
      } else if (["string", "number"].includes(typeof props.modelValue)) {
        return props.valueAttribute ? accessor2(selected.value, props.optionAttribute) : props.modelValue;
      }
      return accessor2(props.modelValue, props.optionAttribute);
    });
    const selectClass = computed(() => {
      const variant = ui.value.color?.[color.value]?.[props.variant] || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        uiMenu.value.select,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant?.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && (!props.modelValue || Array.isArray(props.modelValue) && !props.modelValue.length) && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const debouncedSearch = props.searchable && typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const options = computedAsync(async () => {
      if (debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      return props.options || [];
    }, [], {
      lazy: props.searchableLazy
    });
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, (match) => `\\${match}`);
    }
    function accessor2(obj, key) {
      return get(obj, key);
    }
    function isObject(object) {
      return !Array.isArray(object) && object !== null && typeof object === "object";
    }
    const filteredOptions = computed(() => {
      if (!query.value || debouncedSearch) {
        return options.value;
      }
      const escapedQuery = escapeRegExp(query.value);
      return options.value.filter((option) => {
        return (props.searchAttributes?.length ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          if (["string", "number"].includes(typeof option)) {
            return String(option).search(new RegExp(escapedQuery, "i")) !== -1;
          }
          const child = get(option, searchAttribute);
          return child !== null && child !== void 0 && String(child).search(new RegExp(escapedQuery, "i")) !== -1;
        });
      });
    });
    const createOption = computed(() => {
      if (query.value === "") {
        return null;
      }
      if (props.showCreateOptionWhen === "empty" && filteredOptions.value.length) {
        return null;
      }
      if (props.showCreateOptionWhen === "always") {
        const existingOption = filteredOptions.value.find((option) => ["string", "number"].includes(typeof option) ? option === query.value : accessor2(option, props.optionAttribute) === query.value);
        if (existingOption) {
          return null;
        }
      }
      if (typeof props.showCreateOptionWhen === "function") {
        if (!props.showCreateOptionWhen(query.value, filteredOptions.value)) {
          return null;
        }
      }
      return ["string", "number"].includes(typeof props.modelValue) ? query.value : { [props.optionAttribute]: query.value };
    });
    function clearOnClose() {
      if (props.clearSearchOnClose) {
        query.value = "";
      }
    }
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        clearOnClose();
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      emit("update:modelValue", value);
      emit("change", value);
      emitFormChange();
    }
    function onQueryChange(event) {
      query.value = event.target.value;
    }
    s$4(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      popper,
      trigger,
      container,
      selected,
      label,
      accessor: accessor2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      createOption,
      // eslint-disable-next-line vue/no-dupe-keys
      query,
      onUpdate,
      onQueryChange,
      // eslint-disable-next-line vue/no-dupe-keys
      by
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_5$2;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.multiple ? Array.isArray(_ctx.modelValue) ? _ctx.modelValue : [] : _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled,
    as: "div",
    class: _ctx.ui.wrapper,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass(_ctx.uiMenu.required)}"${ssrRenderAttr("form", _ctx.inputTargetForm)} tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: _ctx.uiMenu.trigger
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => {
                  if (_ctx.label) {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass(_ctx.uiMenu.label)}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || " ")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    selected: _ctx.selected,
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    id: _ctx.inputId,
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                      _ctx.label ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: _ctx.uiMenu.label
                      }, toDisplayString(_ctx.placeholder || " "), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        selected: _ctx.selected,
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["id", "disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.uiMenu.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected: optionSelected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute))}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (optionSelected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected: optionSelected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                  key: 1,
                                  ref_for: true
                                }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                              ])
                            ], 2),
                            optionSelected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.createOption) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.createOption,
                          active,
                          selected: optionSelected
                        }, () => {
                          _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.create)}"${_scopeId3}>Create &quot;${ssrInterpolate(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute))}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected: optionSelected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions?.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query))}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else if (!_ctx.filteredOptions?.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => {
                    _push3(`${ssrInterpolate(_ctx.uiMenu.default.empty.label)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: _ctx.onQueryChange
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected: optionSelected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                key: 1,
                                ref_for: true
                              }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                            ])
                          ], 2),
                          optionSelected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.createOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected: optionSelected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.createOption,
                            active,
                            selected: optionSelected
                          }, () => [
                            createVNode("span", {
                              class: _ctx.uiMenu.option.create
                            }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions?.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                    ])
                  ], 2)) : !_ctx.filteredOptions?.length ? (openBlock(), createBlock("p", {
                    key: 3,
                    class: _ctx.uiMenu.empty
                  }, [
                    renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                      createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: _ctx.uiMenu.required,
            form: _ctx.inputTargetForm,
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 10, ["value", "required", "form"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: _ctx.uiMenu.trigger
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  id: _ctx.inputId,
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", { selected: _ctx.selected }, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.label), 3)) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.uiMenu.label
                    }, toDisplayString(_ctx.placeholder || " "), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      selected: _ctx.selected,
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["id", "disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.uiMenu.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                    static: "",
                    class: [_ctx.uiMenu.base, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                  }, {
                    default: withCtx(() => [
                      _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                        key: 0,
                        "display-value": () => _ctx.query,
                        name: "q",
                        placeholder: _ctx.searchablePlaceholder,
                        autofocus: "",
                        autocomplete: "off",
                        class: _ctx.uiMenu.input,
                        onChange: _ctx.onQueryChange
                      }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                          key: index,
                          as: "template",
                          value: _ctx.valueAttribute ? _ctx.accessor(option, _ctx.valueAttribute) : option,
                          disabled: option.disabled
                        }, {
                          default: withCtx(({ active, selected: optionSelected, disabled: optionDisabled }) => [
                            createVNode("li", {
                              class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, optionSelected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                            }, [
                              createVNode("div", {
                                class: _ctx.uiMenu.option.container
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option,
                                  active,
                                  selected: optionSelected
                                }, () => [
                                  option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: option.icon,
                                    class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                    "aria-hidden": "true"
                                  }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                                    key: 1,
                                    ref_for: true
                                  }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                    class: _ctx.uiMenu.option.avatar.base,
                                    "aria-hidden": "true"
                                  }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: _ctx.uiMenu.option.chip.base,
                                    style: { background: `#${option.chip}` }
                                  }, null, 6)) : createCommentVNode("", true),
                                  createVNode("span", { class: "truncate" }, toDisplayString(["string", "number"].includes(typeof option) ? option : _ctx.accessor(option, _ctx.optionAttribute)), 1)
                                ])
                              ], 2),
                              optionSelected ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                              }, [
                                createVNode(_component_UIcon, {
                                  name: _ctx.selectedIcon,
                                  class: _ctx.uiMenu.option.selectedIcon.base,
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      _ctx.creatable && _ctx.createOption ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: 1,
                        value: _ctx.createOption,
                        as: "template"
                      }, {
                        default: withCtx(({ active, selected: optionSelected }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.createOption,
                                active,
                                selected: optionSelected
                              }, () => [
                                createVNode("span", {
                                  class: _ctx.uiMenu.option.create
                                }, 'Create "' + toDisplayString(typeof _ctx.createOption === "string" ? _ctx.createOption : _ctx.accessor(_ctx.createOption, _ctx.optionAttribute)) + '"', 3)
                              ])
                            ], 2)
                          ], 2)
                        ]),
                        _: 3
                      }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions?.length ? (openBlock(), createBlock("p", {
                        key: 2,
                        class: _ctx.uiMenu.option.empty
                      }, [
                        renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                          createTextVNode(toDisplayString(_ctx.uiMenu.default.optionEmpty.label.replace("{query}", _ctx.query)), 1)
                        ])
                      ], 2)) : !_ctx.filteredOptions?.length ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: _ctx.uiMenu.empty
                      }, [
                        renderSlot(_ctx.$slots, "empty", { query: _ctx.query }, () => [
                          createTextVNode(toDisplayString(_ctx.uiMenu.default.empty.label), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 8, ["class"]))
                ])
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ItemForm",
  __ssrInlineRender: true,
  props: {
    fields: {},
    initialData: {},
    loading: { type: Boolean }
  },
  emits: ["save", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const model = reactive({});
    watch(() => props.fields, (newFields) => {
      newFields.forEach((f2) => {
        if (props.initialData && props.initialData[f2.id] !== void 0) {
          model[f2.id] = props.initialData[f2.id];
        } else {
          if (f2.type === "boolean") model[f2.id] = false;
          else if (f2.type === "multiselect") model[f2.id] = [];
          else model[f2.id] = null;
        }
      });
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UTextarea = __nuxt_component_1$2;
      const _component_UToggle = __nuxt_component_3$1;
      const _component_USelect = __nuxt_component_1$3;
      const _component_USelectMenu = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="space-y-4"><!--[-->`);
      ssrRenderList(__props.fields, (field) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UFormGroup, {
          label: field.name,
          name: field.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (field.type === "text") {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  type: "text"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "textarea") {
                _push2(ssrRenderComponent(_component_UTextarea, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "number") {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  modelModifiers: { number: true },
                  type: "number"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "date") {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  type: "date"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "boolean") {
                _push2(ssrRenderComponent(_component_UToggle, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "select") {
                _push2(ssrRenderComponent(_component_USelect, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  options: field.options || []
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (field.type === "multiselect") {
                _push2(ssrRenderComponent(_component_USelectMenu, {
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  options: field.options || [],
                  multiple: ""
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                field.type === "text" ? (openBlock(), createBlock(_component_UInput, {
                  key: 0,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  type: "text"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                field.type === "textarea" ? (openBlock(), createBlock(_component_UTextarea, {
                  key: 1,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                field.type === "number" ? (openBlock(), createBlock(_component_UInput, {
                  key: 2,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  modelModifiers: { number: true },
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                field.type === "date" ? (openBlock(), createBlock(_component_UInput, {
                  key: 3,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                field.type === "boolean" ? (openBlock(), createBlock(_component_UToggle, {
                  key: 4,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                field.type === "select" ? (openBlock(), createBlock(_component_USelect, {
                  key: 5,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  options: field.options || []
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true),
                field.type === "multiselect" ? (openBlock(), createBlock(_component_USelectMenu, {
                  key: 6,
                  modelValue: unref(model)[field.id],
                  "onUpdate:modelValue": ($event) => unref(model)[field.id] = $event,
                  options: field.options || [],
                  multiple: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mt-6 flex justify-end gap-3">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "ghost",
        onClick: ($event) => _ctx.$emit("cancel")
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
        loading: __props.loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Salvar Item`);
          } else {
            return [
              createTextVNode("Salvar Item")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ItemForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImportWizard",
  __ssrInlineRender: true,
  props: {
    collectionFields: {},
    collectionId: {}
  },
  emits: ["close", "refresh"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const step = ref(1);
    ref(null);
    const fileHeaders = ref([]);
    const fullData = ref([]);
    const mapping = ref({});
    const previewRow = computed(() => {
      if (fullData.value.length === 0) return {};
      return fullData.value[0];
    });
    const processImport = async () => {
      step.value = 3;
      const supabase = useSupabaseClient();
      const toast = useToast();
      try {
        const itemsToInsert = [];
        const valuesToInsert = [];
        const requiredFields = props.collectionFields.filter((f2) => f2.required).map((f2) => f2.id);
        let skippedCount = 0;
        const validRows = [];
        fullData.value.forEach((row) => {
          let isValid = true;
          for (const fieldId of requiredFields) {
            const header = mapping.value[fieldId];
            const value = row[header];
            if (value === void 0 || value === null || value === "") {
              isValid = false;
              break;
            }
          }
          if (isValid) {
            validRows.push(row);
          } else {
            skippedCount++;
          }
        });
        const batchSize = 50;
        const chunks = [];
        for (let i2 = 0; i2 < validRows.length; i2 += batchSize) {
          chunks.push(validRows.slice(i2, i2 + batchSize));
        }
        for (const chunk of chunks) {
          const { data: createdItems, error: itemError } = await supabase.from("items").insert(chunk.map(() => ({ collection_id: props.collectionId }))).select();
          if (itemError) throw itemError;
          createdItems.forEach((item, index) => {
            const rowData = chunk[index];
            Object.entries(mapping.value).forEach(([fieldId, excelHeader]) => {
              const value = rowData[excelHeader];
              if (value !== void 0 && value !== null && value !== "") {
                valuesToInsert.push({
                  item_id: item.id,
                  field_id: fieldId,
                  value
                });
              }
            });
          });
        }
        if (valuesToInsert.length > 0) {
          const { error: valError } = await supabase.from("item_values").insert(valuesToInsert);
          if (valError) throw valError;
        }
        toast.add({
          title: "Success",
          description: `Imported ${validRows.length} items. Skipped ${skippedCount} items due to missing required fields.`,
          color: "green",
          timeout: 5e3
        });
        emit("refresh");
        emit("close");
      } catch (error) {
        console.error(error);
        toast.add({ title: "Error", description: error.message, color: "red" });
        step.value = 2;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_1$1;
      const _component_USelect = __nuxt_component_1$3;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
      if (unref(step) === 1) {
        _push(`<div><div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-document-arrow-up",
          class: "w-12 h-12 text-gray-400 mx-auto mb-2"
        }, null, _parent));
        _push(`<p class="text-gray-600 dark:text-gray-300">Clique para enviar arquivo .xlsx</p><input type="file" accept=".xlsx, .xls, .csv" class="hidden"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === 2) {
        _push(`<div><h3 class="font-bold mb-4">Mapear Colunas</h3><div class="space-y-3 max-h-96 overflow-y-auto"><!--[-->`);
        ssrRenderList(__props.collectionFields, (field) => {
          _push(`<div class="grid grid-cols-2 gap-4 items-center"><div class="text-sm font-medium">${ssrInterpolate(field.name)} `);
          if (field.required) {
            _push(`<span class="text-red-500">*</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_USelect, {
            modelValue: unref(mapping)[field.id],
            "onUpdate:modelValue": ($event) => unref(mapping)[field.id] = $event,
            options: unref(fileHeaders),
            placeholder: "Selecione Coluna Excel"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><h4 class="font-bold text-sm mb-2">Pré-visualização (Primeira Linha)</h4><div class="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto"><pre>${ssrInterpolate(unref(previewRow))}</pre></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === 3) {
        _push(`<div class="text-center py-8">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-arrow-path",
          class: "w-12 h-12 animate-spin text-primary-500 mx-auto mb-4"
        }, null, _parent));
        _push(`<p>Processando ${ssrInterpolate(unref(fullData).length)} itens...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-end gap-3 mt-6">`);
      if (unref(step) > 1 && unref(step) < 3) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "gray",
          variant: "ghost",
          onClick: ($event) => step.value = 1
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Voltar`);
            } else {
              return [
                createTextVNode("Voltar")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(step) === 2) {
        _push(ssrRenderComponent(_component_UButton, { onClick: processImport }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Importar Linhas`);
            } else {
              return [
                createTextVNode("Importar Linhas")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImportWizard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_1$1,
    UAvatar: __nuxt_component_5$2
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.border.size.horizontal).includes(value) || Object.keys(config.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: () => config.default.type,
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
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
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_1$1;
  const _component_UAvatar = __nuxt_component_5$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CollectionSettingsModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    collectionId: {}
  },
  emits: ["update:modelValue", "refresh"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const supabase = useSupabaseClient();
    const toast = useToast();
    const loading = ref(false);
    const form = reactive({
      name: "",
      description: "",
      visibility: "private",
      fields: []
    });
    watch(isOpen, async (val) => {
      if (val) {
        loading.value = true;
        try {
          const { data, error } = await supabase.from("collections").select(`*, fields (*)`).eq("id", props.collectionId).single();
          if (error) throw error;
          form.name = data.name;
          form.description = data.description;
          form.visibility = data.visibility || "private";
          form.fields = (data.fields || []).sort((a2, b) => a2.folder_order - b.folder_order);
        } catch (e2) {
          toast.add({ title: "Erro ao carregar", description: e2.message, color: "red" });
          isOpen.value = false;
        } finally {
          loading.value = false;
        }
      }
    });
    const addField = () => {
      form.fields.push({
        name: "",
        type: "text",
        options: [],
        visible: true,
        required: false,
        folder_order: form.fields.length
      });
    };
    const removeField = async (index) => {
      const field = form.fields[index];
      if (field.id) {
        if (!confirm(`Excluir campo "${field.name}"? Todos os dados deste campo serão perdidos!`)) return;
        try {
          const { error } = await supabase.from("fields").delete().eq("id", field.id);
          if (error) throw error;
          toast.add({ title: "Campo removido", color: "green" });
        } catch (e2) {
          toast.add({ title: "Erro", description: e2.message, color: "red" });
          return;
        }
      }
      form.fields.splice(index, 1);
    };
    const saveChanges = async () => {
      loading.value = true;
      try {
        const { error: colError } = await supabase.from("collections").update({
          name: form.name,
          description: form.description,
          visibility: form.visibility
        }).eq("id", props.collectionId);
        if (colError) throw colError;
        const fieldsPayload = form.fields.map((f2, index) => ({
          ...f2,
          collection_id: props.collectionId,
          folder_order: index,
          // Clear ID if it was a temp one (though we don't use temp IDs here)
          id: f2.id || void 0
        }));
        if (fieldsPayload.length > 0) {
          const { error: fieldsError } = await supabase.from("fields").upsert(fieldsPayload);
          if (fieldsError) throw fieldsError;
        }
        toast.add({ title: "Sucesso", description: "Configurações atualizadas", color: "green" });
        emit("refresh");
        isOpen.value = false;
      } catch (e2) {
        toast.add({ title: "Erro ao salvar", description: e2.message, color: "red" });
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_8;
      const _component_UCard = __nuxt_component_9;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UTextarea = __nuxt_component_1$2;
      const _component_UDivider = __nuxt_component_6;
      const _component_CollectionAccessControl = _sfc_main$d;
      const _component_FieldDefinition = _sfc_main$e;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "prevent-close": "",
        ui: { width: "sm:max-w-2xl" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { ui: { divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}> Configurações da Coleção </h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark",
                    class: "-my-1",
                    onClick: ($event) => isOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Configurações da Coleção "),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark",
                        class: "-my-1",
                        onClick: ($event) => isOpen.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Cancelar`);
                      } else {
                        return [
                          createTextVNode("Cancelar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    loading: unref(loading),
                    onClick: saveChanges
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Salvar Alterações`);
                      } else {
                        return [
                          createTextVNode("Salvar Alterações")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancelar")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        loading: unref(loading),
                        onClick: saveChanges
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Salvar Alterações")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-6 max-h-[70vh] overflow-y-auto p-1"${_scopeId2}><div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Nome da Coleção",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          placeholder: "ex. Minha Coleção"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "ex. Minha Coleção"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Descrição" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: unref(form).description,
                          "onUpdate:modelValue": ($event) => unref(form).description = $event
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CollectionAccessControl, {
                    modelValue: unref(form).visibility,
                    "onUpdate:modelValue": ($event) => unref(form).visibility = $event,
                    "collection-id": __props.collectionId
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UDivider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><h4 class="text-sm font-bold uppercase tracking-wider text-gray-500"${_scopeId2}>Campos Personalizados</h4>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    icon: "i-heroicons-plus",
                    onClick: addField
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adicionar Campo`);
                      } else {
                        return [
                          createTextVNode("Adicionar Campo")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(form).fields.length === 0) {
                    _push3(`<div class="text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700"${_scopeId2}><p class="text-sm text-gray-500"${_scopeId2}>Nenhum campo personalizado ainda.</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="space-y-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(form).fields, (field, index) => {
                    _push3(`<div class="relative group"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_FieldDefinition, {
                      modelValue: unref(form).fields[index],
                      "onUpdate:modelValue": ($event) => unref(form).fields[index] = $event,
                      onRemove: ($event) => removeField(index)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-6 max-h-[70vh] overflow-y-auto p-1" }, [
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode(_component_UFormGroup, {
                          label: "Nome da Coleção",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "ex. Minha Coleção"
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
                      ]),
                      createVNode(_component_UDivider),
                      createVNode(_component_CollectionAccessControl, {
                        modelValue: unref(form).visibility,
                        "onUpdate:modelValue": ($event) => unref(form).visibility = $event,
                        "collection-id": __props.collectionId
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "collection-id"]),
                      createVNode(_component_UDivider),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("h4", { class: "text-sm font-bold uppercase tracking-wider text-gray-500" }, "Campos Personalizados"),
                          createVNode(_component_UButton, {
                            size: "xs",
                            icon: "i-heroicons-plus",
                            onClick: addField
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Adicionar Campo")
                            ]),
                            _: 1
                          })
                        ]),
                        unref(form).fields.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700"
                        }, [
                          createVNode("p", { class: "text-sm text-gray-500" }, "Nenhum campo personalizado ainda.")
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).fields, (field, index) => {
                            return openBlock(), createBlock("div", {
                              key: field.id || index,
                              class: "relative group"
                            }, [
                              createVNode(_component_FieldDefinition, {
                                modelValue: unref(form).fields[index],
                                "onUpdate:modelValue": ($event) => unref(form).fields[index] = $event,
                                onRemove: ($event) => removeField(index)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onRemove"])
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { ui: { divide: "divide-y divide-gray-100 dark:divide-gray-800" } }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, " Configurações da Coleção "),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark",
                      class: "-my-1",
                      onClick: ($event) => isOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: ($event) => isOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancelar")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      loading: unref(loading),
                      onClick: saveChanges
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Salvar Alterações")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-6 max-h-[70vh] overflow-y-auto p-1" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Nome da Coleção",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            placeholder: "ex. Minha Coleção"
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
                    ]),
                    createVNode(_component_UDivider),
                    createVNode(_component_CollectionAccessControl, {
                      modelValue: unref(form).visibility,
                      "onUpdate:modelValue": ($event) => unref(form).visibility = $event,
                      "collection-id": __props.collectionId
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "collection-id"]),
                    createVNode(_component_UDivider),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("h4", { class: "text-sm font-bold uppercase tracking-wider text-gray-500" }, "Campos Personalizados"),
                        createVNode(_component_UButton, {
                          size: "xs",
                          icon: "i-heroicons-plus",
                          onClick: addField
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Adicionar Campo")
                          ]),
                          _: 1
                        })
                      ]),
                      unref(form).fields.length === 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700"
                      }, [
                        createVNode("p", { class: "text-sm text-gray-500" }, "Nenhum campo personalizado ainda.")
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).fields, (field, index) => {
                          return openBlock(), createBlock("div", {
                            key: field.id || index,
                            class: "relative group"
                          }, [
                            createVNode(_component_FieldDefinition, {
                              modelValue: unref(form).fields[index],
                              "onUpdate:modelValue": ($event) => unref(form).fields[index] = $event,
                              onRemove: ($event) => removeField(index)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onRemove"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionSettingsModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommentSection",
  __ssrInlineRender: true,
  props: {
    collectionId: {}
  },
  setup(__props) {
    const props = __props;
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const toast = useToast();
    const comments = ref([]);
    const newComment = ref("");
    const posting = ref(false);
    const loadComments = async () => {
      const { data, error } = await supabase.from("comments").select(`
      id, 
      content, 
      created_at, 
      profiles ( full_name, avatar_url )
    `).eq("collection_id", props.collectionId).order("created_at", { ascending: false });
      if (!error && data) {
        comments.value = data;
      }
    };
    const postComment = async () => {
      if (!newComment.value.trim() || !user.value) return;
      posting.value = true;
      try {
        const { error } = await supabase.from("comments").insert({
          collection_id: props.collectionId,
          user_id: user.value.id,
          content: newComment.value.trim()
        });
        if (error) throw error;
        newComment.value = "";
        loadComments();
      } catch (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } finally {
        posting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = __nuxt_component_5$2;
      const _component_UTextarea = __nuxt_component_1$2;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8" }, _attrs))}><h3 class="text-xl font-bold mb-4">Comentários</h3>`);
      if (unref(user)) {
        _push(`<div class="mb-6 flex gap-3">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: unref(user).user_metadata.avatar_url,
          alt: unref(user).user_metadata.full_name
        }, null, _parent));
        _push(`<div class="flex-1 space-y-2">`);
        _push(ssrRenderComponent(_component_UTextarea, {
          modelValue: unref(newComment),
          "onUpdate:modelValue": ($event) => isRef(newComment) ? newComment.value = $event : null,
          placeholder: "Escreva um comentário...",
          rows: 2,
          autoresize: ""
        }, null, _parent));
        _push(`<div class="flex justify-end">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          loading: unref(posting),
          disabled: !unref(newComment).trim(),
          onClick: postComment
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Comentar`);
            } else {
              return [
                createTextVNode("Comentar")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4">`);
      if (unref(comments).length === 0) {
        _push(`<div class="text-center text-gray-500 py-4"> Nenhum comentário ainda. Seja o primeiro! </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(comments), (comment) => {
          _push(`<div class="flex gap-3">`);
          _push(ssrRenderComponent(_component_UAvatar, {
            src: comment.profiles?.avatar_url,
            alt: comment.profiles?.full_name,
            size: "sm"
          }, null, _parent));
          _push(`<div class="flex-1"><div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3"><div class="flex justify-between items-start mb-1"><span class="font-semibold text-sm">${ssrInterpolate(comment.profiles?.full_name || "Anônimo")}</span><span class="text-xs text-gray-500">${ssrInterpolate(new Date(comment.created_at).toLocaleDateString())}</span></div><p class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">${ssrInterpolate(comment.content)}</p></div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const collectionId = route.params.id;
    const supabase = useSupabaseClient();
    const toast = useToast();
    const collection = ref(null);
    const fields = ref([]);
    const items = ref([]);
    const pending = ref(true);
    const selectedItems = ref([]);
    const isOpen = ref(false);
    const isOpenImport = ref(false);
    const isOpenSettings = ref(false);
    const showStats = ref(true);
    const toggleStats = () => {
      showStats.value = !showStats.value;
      localStorage.setItem("show-stats", String(showStats.value));
    };
    const editingItemId = ref(null);
    const editingItemData = ref({});
    const saving = ref(false);
    const searchQuery = ref("");
    const filters = ref({});
    const activeFiltersCount = computed(() => {
      return Object.values(filters.value).filter((val) => val && val.trim() !== "").length;
    });
    const clearFilters = () => {
      filters.value = {};
    };
    const loadData = async () => {
      pending.value = true;
      try {
        const { data: colData, error: colError } = await supabase.from("collections").select(`*, fields (*)`).eq("id", collectionId).single();
        if (colError) throw colError;
        collection.value = colData;
        fields.value = (colData.fields || []).sort((a2, b) => a2.folder_order - b.folder_order);
        const { data: itemData, error: itemError } = await supabase.from("items").select(`id, created_at, item_values ( field_id, value )`).eq("collection_id", collectionId).order("created_at", { ascending: false });
        if (itemError) throw itemError;
        items.value = itemData || [];
      } catch (error) {
        toast.add({ title: "Error", description: error.message, color: "red" });
      } finally {
        pending.value = false;
      }
    };
    const rows = computed(() => {
      return items.value.map((item) => {
        const row = { id: item.id, created_at: item.created_at };
        item.item_values.forEach((iv) => {
          row[iv.field_id] = iv.value;
        });
        return row;
      });
    });
    const filteredRows = computed(() => {
      let result = rows.value;
      if (searchQuery.value) {
        const q2 = searchQuery.value.toLowerCase();
        result = result.filter((row) => {
          return Object.values(row).some((val) => String(val).toLowerCase().includes(q2));
        });
      }
      for (const [fieldId, filterValue] of Object.entries(filters.value)) {
        if (filterValue && filterValue.trim() !== "") {
          const q2 = filterValue.toLowerCase();
          result = result.filter((row) => {
            const val = row[fieldId];
            return String(val ?? "").toLowerCase().includes(q2);
          });
        }
      }
      return result;
    });
    const dynamicColumns = computed(() => {
      return fields.value.filter((f2) => f2.visible).map((f2) => ({
        key: f2.id,
        label: f2.name,
        sortable: true,
        type: f2.type
      }));
    });
    const tableColumns = computed(() => {
      return [
        ...dynamicColumns.value,
        { key: "actions", label: "Ações" }
      ];
    });
    const openCreateModal = () => {
      editingItemId.value = null;
      editingItemData.value = {};
      isOpen.value = true;
    };
    const openEditModal = (row) => {
      editingItemId.value = row.id;
      editingItemData.value = { ...row };
      isOpen.value = true;
    };
    const handleSave = async (formData) => {
      try {
        saving.value = true;
        const itemPayload = {
          collection_id: collectionId,
          id: editingItemId.value || void 0
        };
        const { data: item, error: itemError } = await supabase.from("items").upsert(itemPayload).select().single();
        if (itemError) throw itemError;
        const valuesToUpsert = Object.entries(formData).map(([fieldId, value]) => ({
          item_id: item.id,
          field_id: fieldId,
          value
        }));
        const { error: valuesError } = await supabase.from("item_values").upsert(valuesToUpsert, { onConflict: "item_id, field_id" });
        if (valuesError) throw valuesError;
        toast.add({ title: "Sucesso", description: "Item salvo", color: "green" });
        isOpen.value = false;
        loadData();
      } catch (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } finally {
        saving.value = false;
      }
    };
    const deleteItem = async (id) => {
      if (!confirm("Excluir item?")) return;
      const { error } = await supabase.from("items").delete().eq("id", id);
      if (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } else {
        toast.add({ title: "Excluído", color: "green" });
        items.value = items.value.filter((i2) => i2.id !== id);
      }
    };
    const deleteSelectedItems = async () => {
      const count = selectedItems.value.length;
      if (count === 0) return;
      if (!confirm(`Tem certeza que deseja excluir ${count} itens?`)) return;
      const ids = selectedItems.value.map((i2) => i2.id);
      const { error } = await supabase.from("items").delete().in("id", ids);
      if (error) {
        toast.add({ title: "Erro", description: error.message, color: "red" });
      } else {
        toast.add({ title: "Excluído", description: `${count} itens excluídos`, color: "green" });
        items.value = items.value.filter((i2) => !ids.includes(i2.id));
        selectedItems.value = [];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2$1;
      const _component_UTooltip = __nuxt_component_1;
      const _component_UIcon = __nuxt_component_1$1;
      const _component_CollectionStats = _sfc_main$a;
      const _component_UInput = __nuxt_component_4;
      const _component_UPopover = __nuxt_component_5$1;
      const _component_UTable = __nuxt_component_6$1;
      const _component_UBadge = __nuxt_component_7;
      const _component_UModal = __nuxt_component_8;
      const _component_UCard = __nuxt_component_9;
      const _component_ItemForm = _sfc_main$5;
      const _component_ImportWizard = _sfc_main$4;
      const _component_CollectionSettingsModal = _sfc_main$2;
      const _component_CommentSection = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4"><div><div class="flex items-center gap-2 mb-1">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/dashboard",
        icon: "i-heroicons-arrow-left",
        variant: "ghost",
        color: "gray",
        size: "sm"
      }, null, _parent));
      _push(`<h1 class="text-2xl font-bold">${ssrInterpolate(unref(collection)?.name || "Carregando...")}</h1></div><p class="text-gray-500 text-sm ml-9">${ssrInterpolate(unref(collection)?.description)}</p></div><div class="flex gap-2">`);
      if (unref(selectedItems).length > 0) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "red",
          variant: "soft",
          icon: "i-heroicons-trash",
          onClick: deleteSelectedItems
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Excluir (${ssrInterpolate(unref(selectedItems).length)}) `);
            } else {
              return [
                createTextVNode(" Excluir (" + toDisplayString(unref(selectedItems).length) + ") ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        variant: "outline",
        icon: "i-heroicons-arrow-up-tray",
        onClick: ($event) => isOpenImport.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Importar Excel`);
          } else {
            return [
              createTextVNode("Importar Excel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-plus",
        onClick: openCreateModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Novo Item`);
          } else {
            return [
              createTextVNode("Novo Item")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UTooltip, { text: "Configurações e Campos" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-cog-6-tooth",
              variant: "ghost",
              color: "gray",
              onClick: ($event) => isOpenSettings.value = true
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons-cog-6-tooth",
                variant: "ghost",
                color: "gray",
                onClick: ($event) => isOpenSettings.value = true
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(fields).length > 0 && unref(items).length > 0) {
        _push(`<div class="mb-4 flex items-center justify-between bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg border border-gray-100 dark:border-gray-800"><div class="flex items-center gap-2 ml-2"><div class="p-1 bg-primary-100 dark:bg-primary-900/40 rounded">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-heroicons-presentation-chart-line",
          class: "w-4 h-4 text-primary-600 dark:text-primary-400"
        }, null, _parent));
        _push(`</div><h2 class="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">Resumo da Coleção</h2></div>`);
        _push(ssrRenderComponent(_component_UButton, {
          icon: unref(showStats) ? "i-heroicons-eye-slash" : "i-heroicons-eye",
          variant: "ghost",
          color: "gray",
          size: "xs",
          onClick: toggleStats
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(showStats) ? "Ocultar Dashboards" : "Mostrar Dashboards")}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(showStats) ? "Ocultar Dashboards" : "Mostrar Dashboards"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showStats)) {
        _push(ssrRenderComponent(_component_CollectionStats, {
          fields: unref(fields),
          items: unref(rows)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-4 flex flex-col md:flex-row gap-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        icon: "i-heroicons-magnifying-glass",
        placeholder: "Buscar em todas as colunas...",
        class: "w-full md:w-64"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UPopover, null, {
        panel: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 w-80 space-y-4"${_scopeId}><h4 class="font-bold text-sm"${_scopeId}>Filtros Ativos</h4><!--[-->`);
            ssrRenderList(unref(fields), (field) => {
              _push2(`<div class="flex flex-col gap-1"${_scopeId}><label class="text-xs font-medium text-gray-500"${_scopeId}>${ssrInterpolate(field.name)}</label>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(filters)[field.id],
                "onUpdate:modelValue": ($event) => unref(filters)[field.id] = $event,
                size: "xs",
                placeholder: `Filtrar por ${field.name}`
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            if (unref(activeFiltersCount) > 0) {
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "gray",
                variant: "ghost",
                block: "",
                onClick: clearFilters
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Limpar Todos`);
                  } else {
                    return [
                      createTextVNode("Limpar Todos")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 w-80 space-y-4" }, [
                createVNode("h4", { class: "font-bold text-sm" }, "Filtros Ativos"),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                  return openBlock(), createBlock("div", {
                    key: field.id,
                    class: "flex flex-col gap-1"
                  }, [
                    createVNode("label", { class: "text-xs font-medium text-gray-500" }, toDisplayString(field.name), 1),
                    createVNode(_component_UInput, {
                      modelValue: unref(filters)[field.id],
                      "onUpdate:modelValue": ($event) => unref(filters)[field.id] = $event,
                      size: "xs",
                      placeholder: `Filtrar por ${field.name}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]);
                }), 128)),
                unref(activeFiltersCount) > 0 ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  size: "xs",
                  color: "gray",
                  variant: "ghost",
                  block: "",
                  onClick: clearFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode("Limpar Todos")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "white",
              icon: "i-heroicons-funnel",
              "trailing-icon": "i-heroicons-chevron-down"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Filtros ${ssrInterpolate(unref(activeFiltersCount) > 0 ? `(${unref(activeFiltersCount)})` : "")}`);
                } else {
                  return [
                    createTextVNode(" Filtros " + toDisplayString(unref(activeFiltersCount) > 0 ? `(${unref(activeFiltersCount)})` : ""), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "white",
                icon: "i-heroicons-funnel",
                "trailing-icon": "i-heroicons-chevron-down"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Filtros " + toDisplayString(unref(activeFiltersCount) > 0 ? `(${unref(activeFiltersCount)})` : ""), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        modelValue: unref(selectedItems),
        "onUpdate:modelValue": ($event) => isRef(selectedItems) ? selectedItems.value = $event : null,
        rows: unref(filteredRows),
        columns: unref(tableColumns),
        loading: unref(pending),
        class: "w-full"
      }, createSlots({
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-1 justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-pencil-square",
              size: "xs",
              color: "gray",
              variant: "ghost",
              onClick: ($event) => openEditModal(row)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-trash",
              size: "xs",
              color: "red",
              variant: "ghost",
              onClick: ($event) => deleteItem(row.id)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-1 justify-end" }, [
                createVNode(_component_UButton, {
                  icon: "i-heroicons-pencil-square",
                  size: "xs",
                  color: "gray",
                  variant: "ghost",
                  onClick: ($event) => openEditModal(row)
                }, null, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-trash",
                  size: "xs",
                  color: "red",
                  variant: "ghost",
                  onClick: ($event) => deleteItem(row.id)
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 2
      }, [
        renderList(unref(dynamicColumns), (col) => {
          return {
            name: `${col.key}-data`,
            fn: withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (col.type === "boolean") {
                  _push2(`<span${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: row[col.key] ? "green" : "gray",
                    variant: "soft"
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(row[col.key] ? "Sim" : "Não")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row[col.key] ? "Sim" : "Não"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</span>`);
                } else if (col.type === "multiselect") {
                  _push2(`<span${_scopeId}>${ssrInterpolate(Array.isArray(row[col.key]) ? row[col.key].join(", ") : row[col.key])}</span>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(row[col.key])}</span>`);
                }
              } else {
                return [
                  col.type === "boolean" ? (openBlock(), createBlock("span", { key: 0 }, [
                    createVNode(_component_UBadge, {
                      color: row[col.key] ? "green" : "gray",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row[col.key] ? "Sim" : "Não"), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ])) : col.type === "multiselect" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(Array.isArray(row[col.key]) ? row[col.key].join(", ") : row[col.key]), 1)) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(row[col.key]), 1))
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-bold"${_scopeId2}>${ssrInterpolate(unref(editingItemId) ? "Editar Item" : "Novo Item")}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "font-bold" }, toDisplayString(unref(editingItemId) ? "Editar Item" : "Novo Item"), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(fields).length > 0) {
                    _push3(ssrRenderComponent(_component_ItemForm, {
                      fields: unref(fields),
                      "initial-data": unref(editingItemData),
                      loading: unref(saving),
                      onSave: handleSave,
                      onCancel: ($event) => isOpen.value = false
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(fields).length > 0 ? (openBlock(), createBlock(_component_ItemForm, {
                      key: 0,
                      fields: unref(fields),
                      "initial-data": unref(editingItemData),
                      loading: unref(saving),
                      onSave: handleSave,
                      onCancel: ($event) => isOpen.value = false
                    }, null, 8, ["fields", "initial-data", "loading", "onCancel"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "font-bold" }, toDisplayString(unref(editingItemId) ? "Editar Item" : "Novo Item"), 1)
                ]),
                default: withCtx(() => [
                  unref(fields).length > 0 ? (openBlock(), createBlock(_component_ItemForm, {
                    key: 0,
                    fields: unref(fields),
                    "initial-data": unref(editingItemData),
                    loading: unref(saving),
                    onSave: handleSave,
                    onCancel: ($event) => isOpen.value = false
                  }, null, 8, ["fields", "initial-data", "loading", "onCancel"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isOpenImport),
        "onUpdate:modelValue": ($event) => isRef(isOpenImport) ? isOpenImport.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Importar do Excel`);
                } else {
                  return [
                    createTextVNode("Importar do Excel")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isOpenImport)) {
                    _push3(ssrRenderComponent(_component_ImportWizard, {
                      "collection-id": unref(collectionId),
                      "collection-fields": unref(fields),
                      onClose: ($event) => isOpenImport.value = false,
                      onRefresh: loadData
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(isOpenImport) ? (openBlock(), createBlock(_component_ImportWizard, {
                      key: 0,
                      "collection-id": unref(collectionId),
                      "collection-fields": unref(fields),
                      onClose: ($event) => isOpenImport.value = false,
                      onRefresh: loadData
                    }, null, 8, ["collection-id", "collection-fields", "onClose"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createTextVNode("Importar do Excel")
                ]),
                default: withCtx(() => [
                  unref(isOpenImport) ? (openBlock(), createBlock(_component_ImportWizard, {
                    key: 0,
                    "collection-id": unref(collectionId),
                    "collection-fields": unref(fields),
                    onClose: ($event) => isOpenImport.value = false,
                    onRefresh: loadData
                  }, null, 8, ["collection-id", "collection-fields", "onClose"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CollectionSettingsModal, {
        modelValue: unref(isOpenSettings),
        "onUpdate:modelValue": ($event) => isRef(isOpenSettings) ? isOpenSettings.value = $event : null,
        "collection-id": unref(collectionId),
        onRefresh: loadData
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommentSection, { "collection-id": unref(collectionId) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DFVr_KK7.js.map
