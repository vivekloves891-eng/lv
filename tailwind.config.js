/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackLuxury: "#0B0B0B",
        goldLuxury: "#D4AF37",
        ivoryLuxury: "#F5F1E8"
      },
      fontFamily: {
        luxury: ["serif"]
      }
    }
  },
  plugins: []
}