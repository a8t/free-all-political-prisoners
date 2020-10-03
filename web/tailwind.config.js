const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    position: ["responsive", "hover", "focus"],
    inset: ["responsive", "hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    duration: ["responsive", "hover", "focus", "group-hover"],
    transitionTimingFunction: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/ui"),
    plugin(function ({ addUtilities, e }) {
      const justify = ["start", "center", "end", "baseline"];
      const justifyVariants = ["responsive"];

      const justifySelf = justify.map((alignment) => ({
        [`.justify-self-${e(alignment)}`]: {
          "justify-self": alignment,
        },
      }));

      const justifyItems = justify.map((alignment) => ({
        [`.justify-items-${e(alignment)}`]: {
          "justify-items": alignment,
        },
      }));

      addUtilities(justifyItems, justifyVariants);
      addUtilities(justifySelf, justifyVariants);
    }),
  ],

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
