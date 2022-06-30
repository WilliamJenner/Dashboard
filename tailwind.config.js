/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/scripts/app/**/*.{tsx,jsx,html}", "./Views/**/*.cshtml"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
