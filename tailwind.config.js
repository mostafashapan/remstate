/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0037C1',
        'gray-800': '#2A2A2A',
        'gray-900': '#1A1A1A',
      },
    },
  },
  plugins: [],
};