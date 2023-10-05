/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      screens: { sm: "480px" },
    },
  },
  spacing: {
    big: "10rem",
    px700: "700px",
  },
  fontFamily: {
    nunito: ["Nunito", "sans-serif"],
  },
  plugins: [],
};
