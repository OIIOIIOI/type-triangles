// const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      borderWidth: {
        'cell': '20px',
      },
    },
  },
  plugins: [],
}

