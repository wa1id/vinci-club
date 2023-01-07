/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/noise.png')",
        lines: "url('/line art.png')",
        plan: "url('/bg-plan.png')",
      },
      fontFamily: {
        drukwide: ["DrukWide"],
        sans: ["Outfit"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      primary: {
        DEFAULT: "#1D1D1D",
        light: "#CCCCCC",
        lighter: "#F0EBE8",
      },
      secondary: {
        DEFAULT: "#BDD3E3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
