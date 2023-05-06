/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/*.{css}",
    "./index.html",
    "./src/**/**.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

