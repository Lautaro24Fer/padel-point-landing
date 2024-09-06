/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        poppinsXBI:['poppinsExtraBoldItalic','sans-serif'],
        poppinsSemiBold:['poppinsSemiBold','sans-serif'],
        poppinsMid:['poppinsMedium','sans-serif'],
        poppinsXL:['poppinsLight','sans-serif'],
        poppinsXLI:['poppinsLightItalic','sans-serif']
      }
    },
  },
  plugins: [],
}

