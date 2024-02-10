/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-regular': ['Nsans Regular'],
        'nsans-bold': ['Nsans Bold']
      }
    },
  },
  plugins: [],
}

