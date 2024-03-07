/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'redflix': '#e50913',
      },
      fontFamily: {
        'nsans-light': ['Nsans Light'],
        'nsans-medium': ['Nsans Medium'],
        'nsans-regular': ['Nsans Regular'],
        'nsans-bold': ['Nsans Bold']
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-red-redflix': { backgroundColor: '#e50913' },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

