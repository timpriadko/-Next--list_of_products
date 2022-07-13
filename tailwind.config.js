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
