/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Cores Oficiais do HC para nível profissional
      colors: {
        'hc-principal': '#19286C', // Azul Royal (Header, Títulos)
        'hc-secundaria': '#00A89C', // Verde-Água (Ações, Botões)
        'hc-fundo': '#F8F8F8', // Fundo Limpo
      },
    },
  },
  plugins: [],
}