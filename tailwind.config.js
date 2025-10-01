/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hospital-blue': '#1e3a8a',
        'hospital-green': '#10b981',
      },
    },
  },
  plugins: [],
}