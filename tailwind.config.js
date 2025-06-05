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
        primary: '#4361ee',
        'primary-light': '#4895ef',
        secondary: '#3f37c9',
        dark: '#1b263b',
        darker: '#0d1b2a',
        light: '#f8f9fa',
        accent: '#4cc9f0',
      },
    },
  },
  plugins: [],
};