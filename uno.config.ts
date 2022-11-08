// alteranative import
// import {
//   defineConfig,
//   extractorSvelte
//   presetIcons,
//   presetUno,
//   presetAttributify,
//   transformerDirectives,
//   transformerVariantGroup,
// } from "unocss";

// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

import { defineConfig } from "@unocss/vite";
import { extractorSvelte } from "@unocss/core";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  extractors: [extractorSvelte],

  // https://github.com/unocss/unocss#extend-theme
  theme: {
    fontFamily: {
      secondary: '"Montserrat", sans-serif',
      primary: '"Gilroy", sans-serif'
    },
    colors: {
      purple: {
        dark: "#4153AD",
        light: "#6B7CD3"
      },
      orange: "#FF6827",
      white: "#FFFADF"
    }
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {
    "tap-shrink": "active:scale-90",
    "counter-btn":
      "transform-gpu rounded-md bg-white/40 px-2 py-1 shadow-sm transition tap-shrink active:bg-white/70 active:shadow-lg"
  },

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetIcons({ scale: 1.2, cdn: "https://esm.sh/" }), presetAttributify()],
  transformers: [transformerDirective(), transformerVariantGroup()]
});
