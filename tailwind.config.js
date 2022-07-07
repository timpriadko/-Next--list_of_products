/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...colors,
        white: '#000000',
        black: '#ffffff',
        red: {
          900: '#470011',
          800: '"#6b001a',
          700: '#8e0022',
          600: '#b1002b',
          500: '#d50033',
          400: '#dc2b55',
          300: '#e35577',
          200: '#ea8099',
          100: '#f1aabb',
          50: '#f7ccd6',
        },
        gray: {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5',
          50: '#fafafa',
        },
      },
    },
  },
  plugins: [],
};
