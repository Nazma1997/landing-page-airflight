/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '250px', 'max': '700px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'md': {'min': '720px', 'max': '1200px'},
      // => @media (max-width: 767px) { ... }
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  

  },
  plugins: [],
}
