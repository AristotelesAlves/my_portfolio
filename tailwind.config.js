/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxoPR':'#201D3A',
        'linear_01': '#373737',
        'linear_02': '#141414',
      },
      backgroundImage:{
        'banner': "url('./img/db-space-animation.gif')",
      },
      boxShadow:{
        'innerShadow':'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        'buttonShadow':'0px 1px 0px 0px rgba(0, 0, 0, 0.25)'
      },
      textShadow: {
        'default': '3px 3px 210x rgba(0, 0, 0, 0.50)'
      },
    },
  },
  plugins: [],
}