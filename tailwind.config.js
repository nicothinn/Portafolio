/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-black': '#0A0B0F',
        'cosmic-blue': '#4A7CF7',
        'cosmic-gray': '#8B9DC3',
        'cosmic-light': '#C0C5D0',
        'cosmic-dark': '#1A1D24',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



