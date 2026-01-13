/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rub: {
          blue: '#003560',
          green: '#8dae10',
          grey: '#e6e6e6',
        }
      }
    },
  },
  plugins: [],
}
