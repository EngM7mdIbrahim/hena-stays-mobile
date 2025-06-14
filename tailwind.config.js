/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./apis/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./interfaces/**/*.{js,jsx,ts,tsx}",
    "./config/**/*.{js,jsx,ts,tsx}",
    "./types/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./enums/**/*.{js,jsx,ts,tsx}",
    "./schemas/**/*.{js,jsx,ts,tsx}",
    "./initializers/**/*.{js,jsx,ts,tsx}",
    "./i18n/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#5a95c8",
        secondary: "#f1f2f4",
        text: "#121516",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        title: "32px",

      },
      letterSpacing: {
        tight: -0.24,
        wide: 0.24,
      },
    },
  },
  plugins: [],
};
