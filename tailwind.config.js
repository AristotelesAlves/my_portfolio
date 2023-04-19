/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linear_01': '#ff008e',
        'linear_02': '#ffcd1e',
      },
    },
  },
  plugins: [],
}