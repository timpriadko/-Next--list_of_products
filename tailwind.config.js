const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    baseFontSize: "10px",
    extend: {
      colors: {
        ...colors,
        white: "#ffffff",
        black: "#000000",
        red: {
          900: "#470011",
          800: '"#6b001a',
          700: "#8e0022",
          600: "#b1002b",
          500: "#d50033",
          400: "#dc2b55",
          300: "#e35577",
          200: "#ea8099",
          100: "#f1aabb",
          50: "#f7ccd6",
        },
        gray: {
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e4e4e7",
          100: "#f4f4f5",
          50: "#fafafa",
        },
        blue: {
          900: "#00264e",
          800: "#003976",
          700: "#004c9d",
          600: "#0056b3",
          500: "#0062cc",
          400: "#006fe6",
          300: "#007bff",
          200: "#1a88ff",
          100: "#3395ff",
          50: "#4da3ff",
        },
      },
      boxShadow: {
        sm: "0 .1rem .2rem 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 .1rem .3rem 0 rgb(0 0 0 / 0.1), 0 .1rem .2rem -.1rem rgb(0 0 0 / 0.1)",
        md: "0 .4rem .6rem -.1rem rgb(0 0 0 / 0.1), 0 .2rem .4rem -.2rem rgb(0 0 0 / 0.1)",
        lg: "0 1rem 1.5rem -.3rem rgb(0 0 0 / 0.1), 0 .4rem .6erm -.4rem rgb(0 0 0 / 0.1)",
        xl: "0 2rem 2.5rem -.5rem rgb(0 0 0 / 0.1), 0 .8rem 1rem -.6rem rgb(0 0 0 / 0.1)",
        "2xl": "0 2.5rem 5rem -1.2rem rgb(0 0 0 / 0.25)",
        inner: "inset 0 .2rem .4rem 0 rgb(0 0 0 / 0.05)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "auto",
        md: "auto",
        lg: "auto",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        html: { fontSize: config("theme.baseFontSize") },
      });
    }),
  ],
};
