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
        'dark-blue': '#0A1128',
        'electric-blue': '#0077FF',
        'black': '#0D0D0D',
        'data-green': '#12F7D6',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



