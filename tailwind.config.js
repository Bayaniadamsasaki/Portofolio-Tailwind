/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      color: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        langit: '#0ea5e9',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
} 
